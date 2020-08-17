/**
 * Created by Tatav on 14/04/2017.
 */
import React from 'react';

import DescrSentence from "./AboutDescr/DescrSentence";

export default class AboutDescr extends React.Component {
    render() {
        const { info } = this.props;

        return (
            <p className="about-descr">
                <span>{info.title}</span>
                {info.descr.map((item, key) =>
                    <DescrSentence key={key} text={item}/>
                )}
            </p>
        );
    }
}
