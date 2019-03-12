/**
 * Created by Tatav on 14/04/2017.
 */
import React from 'react';

import ProfilSentence from './Profil/Sentence';
import AboutInfo from '@models/Section/About/Info';

interface AboutProfilProps {
    info: AboutInfo;
}

export default class Profil extends React.Component<AboutProfilProps> {
    constructor(props: AboutProfilProps) {
        super(props);
    }

    render() {
        const { info } = this.props;

        return (
            <figure className='about-profil'>
                <img src={`/assets/${info.asset}`} alt={info.asset}/>
                <figcaption>
                    <p>
                        {info.subtitle.map((item: string, key: number) =>
                            <ProfilSentence key={key} text={item} />
                        )}
                    </p>
                    <a>{info.seemore}</a>
                </figcaption>
            </figure>
        );
    }
}