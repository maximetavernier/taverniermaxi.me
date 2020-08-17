/**
 * Created by Tatav on 14/04/2017.
 */
import React from 'react';

import ProfilSentence from "./AboutProfil/profilsentence";

export default class AboutProfil extends React.Component {
    displayImage() {

    }

    render() {
        const { info } = this.props;

        return (
            <figure className="about-profil">
                <img src={`/assets/${info.asset}`} alt={info.asset}/>
                <figcaption>
                    <p>
                        {info.subtitle.map((item, key) =>
                            <ProfilSentence key={key} text={item} />
                        )}
                    </p>
                    <a onClick={this.displayImage}>{info.seemore}</a>
                </figcaption>
            </figure>
        );
    }
}