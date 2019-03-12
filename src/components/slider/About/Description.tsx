/**
 * Created by Tatav on 14/04/2017.
 */
import React from 'react';

import DescriptionSentence from './Description/Sentence';
import AboutInfo from '@models/Section/About/Info';

interface AboutDescriptionProps {
    info: AboutInfo;
}

export default class Description extends React.Component<AboutDescriptionProps> {
    constructor(props: AboutDescriptionProps) {
        super(props);
    }

    render() {
        const { info } = this.props;

        return (
            <p className="about-descr">
                <span>{info.title}</span>
                {info.descr.map((text: string, key: number) =>
                    <DescriptionSentence key={key} text={text}/>
                )}
            </p>
        );
    }
}
