/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

import AboutHeader from './About/header';
import AboutProfil from './About/profil';
import AboutDescr from './About/descr';
import NextButton from './Section/nextbutton';

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