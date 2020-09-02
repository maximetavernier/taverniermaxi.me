/**
 * Created by Tatav on 22/03/2017.
 */
import React from 'react';

import AboutSection from './about';
import TechnosSection from './technos';
import ProjectsSection from './projects';
import ExpsSection from './exps';
import PassionsSection from './passions';
import ContactSection from './contact';

export default class Section extends React.Component {
    render() {
        const { data } = this.props;
        const { className } = data;

        return (
            <div id={className} className={`section ${className}`}>
                { className.localeCompare('about') == 0 ? <AboutSection data={data}/>
                : className.localeCompare('exps') == 0 ? <ExpsSection data={data}/>
                : className.localeCompare('technos') == 0 ? <TechnosSection data={data}/>
                : className.localeCompare('projects') == 0 ? <ProjectsSection data={data}/>
                : className.localeCompare('passions') == 0 ? <PassionsSection data={data}/>
                : className.localeCompare('contact') == 0 ? <ContactSection data={data}/>
                : <div/> }
            </div>
        )
    }
}
