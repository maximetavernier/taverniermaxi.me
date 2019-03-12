import React from 'react';
import Section from './Slider/Section';
import SectionModel from "@models/SectionModel";

const $ = require('jquery');
const pagepiling = require('./Slider/pagepiling.min');

interface SliderProps {
    sections: SectionModel[];
}

export default class Slider extends React.Component<SliderProps, any> {
    constructor(props: SliderProps) {
        super(props);
    }

    componentDidMount() {
        const { sections } = this.props;
        let titles: string[] = [];
        let colors: string[] = [];

        sections.map(
            (section)=> {
                titles.push(section.title);
                colors.push(section.sectionColor);
            }
        );

        const pager = document.querySelector('#pager');
        const loader = document.querySelector('#react-loader');
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
            onLeave: function(index: number, nextIndex: number, direction: string){},
            afterLoad: function(anchorLink: string, index: number){},
            afterRender: () => $(loader).classList.add('hidden')
        });
    }

    onNext()  {
        $.fn.pagepiling.moveSectionDown();
    }

    render() {
        const { sections } = this.props;

        return (
            <div id="pager">
                {sections.map((section: SectionModel, key: number) =>
                    <Section key={key} data={section} onnext={this.onNext.bind(this)} />
                )}
            </div>
        );
    }
}