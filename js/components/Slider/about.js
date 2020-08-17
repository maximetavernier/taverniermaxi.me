/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

import AboutHeader from './About/Header';
import AboutProfil from './About/Profil';
import AboutDescr from './About/Descr';
import NextButton from './Section/NextButton';

export default class AboutSection extends React.Component {
    render() {
        const { info } = this.props.data;

        return (
            <div id="about-container" className="about-container">
                <AboutHeader firstname={info.firstname} lastname={info.lastname} />
                <AboutProfil info={info} />
                <AboutDescr info={info} />
                <NextButton label={info.seemore} />
            </div>
        );
    }
}