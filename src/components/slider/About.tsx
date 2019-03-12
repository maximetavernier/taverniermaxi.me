/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

import AboutHeader from './About/Header';
import AboutProfil from './About/Profil';
import AboutDescription from './About/Description';
import SectionNextButton from './Section/NextButton';
import SectionModel from "@models/SectionModel";
import AboutSectionModel from "@models/Section/AboutSectionModel";

interface AboutSectionProps {
    key: number;
    data: SectionModel;
    onnext: any;
}

export default class AboutSection extends React.Component<AboutSectionProps, any> {
    constructor(props: AboutSectionProps) {
        super(props);
    }

    render() {
        const { data, onnext } = this.props;
        const { info } = data as AboutSectionModel;

        return (
            <div id="about-container" className="about-container">
                <AboutHeader firstname={info.firstname} lastname={info.lastname} />
                <AboutProfil info={info} />
                <AboutDescription info={info} />
                <SectionNextButton label={info.seemore} onnext={onnext} />
            </div>
        );
    }
}