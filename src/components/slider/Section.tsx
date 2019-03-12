import React from 'react';

import AboutSection from './About';
import TechnosSection from './Technos';
import ProjectsSection from './Projects';
import ExpsSection from './Experiences';
import PassionsSection from './Passions';
import ContactSection from './Contact';

import SectionModel from '@models/SectionModel';
import PassionsSectionModel from '@models/Section/PassionsSectionModel';
import ProjectsSectionModel from '@models/Section/ProjectsSectionModel';
import ExperiencesSectionModel from '@models/Section/ExperiencesSectionModel';
import TechnosSectionModel from '@models/Section/TechnosSectionModel';
import ContactSectionModel from '@models/Section/ContactSectionModel';
import AboutSectionModel from '@models/Section/AboutSectionModel';

interface SectionProps {
    key: number;
    data: SectionModel;
    onnext: any;
}

export default class Section extends React.Component<SectionProps, any> {
    constructor(props: SectionProps) {
        super(props);
    }

    render() {
        const { data, key, onnext } = this.props;
        const { className } = data;

        return (
            <div id={className} className={`section ${className}`}>
                { className.localeCompare('about') == 0 ? <AboutSection key={key} data={data} onnext={onnext}/>
                : className.localeCompare('exps') == 0 ? <ExpsSection key={key} data={data}/>
                : className.localeCompare('technos') == 0 ? <TechnosSection key={key} data={data}/>
                : className.localeCompare('projects') == 0 ? <ProjectsSection key={key} data={data}/>
                : className.localeCompare('passions') == 0 ? <PassionsSection key={key} data={data}/>
                : className.localeCompare('contact') == 0 ? <ContactSection key={key} data={data}/>
                : <div/> }
            </div>
        )
    }
}