'use strict'

import * as React from 'react';
import SectionModel from '@models/SectionModel';
import Section from '@components/slider/Section';

import ReactFullpage, { fullpageApi } from '@fullpage/react-fullpage';

interface SliderProps {
    sections: SectionModel[];
}

export default class Slider extends React.Component<SliderProps, any> {
    constructor(props: SliderProps) {
        super(props);
    }

    componentDidMount() {
        //const slider: Element | null = document.querySelector('#react-slider');
        const loader: Element | null = document.querySelector('#react-loader');

        /*
        if (slider)
        {
            //loader?.classList.add('hidden')
        }
        else
        {
            console.log('No pager found');
        }
        */
    }

    render() {
        const { sections } = this.props;

        let titles: string[] = [];
        let colors: string[] = [];

        sections.map(
            (section)=> {
                titles.push(section.title);
                colors.push(section.sectionColor);
            }
        );

        return (
            <ReactFullpage licenseKey={'F0A3DFB2-EEBC4B03-AAD58AB2-C7DEF0FF'}
                           scrollingSpeed = {1000}
                           render={(_comp: { state: any; fullpageApi: fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        {sections.map((item, key) =>
                            <Section key={key} data={item} />
                        )}
                    </ReactFullpage.Wrapper>
                )
            }}
            />
        );
    }
}