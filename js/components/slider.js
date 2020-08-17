/**
 * Created by Tatav on 22/03/2017.
 */
import React from 'react';
import Section from './Slider/Section';

export default class Slider extends React.Component {
    componentDidMount() {
        const { sections } = this.props;
        const { pager } = this.refs;
        let titles = [];
        let colors = [];

        sections.map(
            (section)=> {
                titles.push(section.title);
                colors.push(section.sectionsColor);
            }
        );

        $(pager).pagepiling({
            menu: null,
            direction: 'vertical',
            verticalCentered: true,
            sectionsColor: colors,
            anchors: [],
            scrollingSpeed: 700,
            easing: 'swing',
            loopBottom: false,
            loopTop: false,
            css3: true,
            navigation: {
                'textColor': '#fff',
                'bulletsColor': '#fff',
                'position': 'right',
                'tooltips': titles
            },
            normalScrollElements: null,
            normalScrollElementTouchThreshold: 5,
            touchSensitivity: 5,
            keyboardScrolling: false,
            sectionSelector: '.section',
            animateAnchor: false,

            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: () => $('#react-loader').addClass('hidden')
        });
    }

    render() {
        const { sections } = this.props;

        return (
            <div ref="pager">
                {sections.map((item, key) =>
                    <Section key={key} data={item} />
                )}
            </div>
        );
    }
}
