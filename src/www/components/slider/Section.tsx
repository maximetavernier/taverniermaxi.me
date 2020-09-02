import React from 'react';

import SectionModel from '@models/SectionModel';

interface SectionProps {
    key: number;
    data: SectionModel;
}

export default class Section extends React.Component<SectionProps, any> {
    constructor(props: SectionProps) {
        super(props);
    }

    render() {
        const { data, key } = this.props;
        const { className } = data;

        return (
            /*
            <div id={className} className={`section ${className}`}>
                { className.localeCompare('about') == 0 ? <AboutSection key={key} data={data}/>
                : className.localeCompare('exps') == 0 ? <ExpsSection key={key} data={data}/>
                : className.localeCompare('technos') == 0 ? <TechnosSection key={key} data={data}/>
                : className.localeCompare('projects') == 0 ? <ProjectsSection key={key} data={data}/>
                : className.localeCompare('passions') == 0 ? <PassionsSection key={key} data={data}/>
                : className.localeCompare('contact') == 0 ? <ContactSection key={key} data={data}/>
                : <div/> }
            </div>
            */
            <div className={'section'}>{className}</div>
        )
    }
}