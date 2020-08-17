/**
 * Created by Tatav on 23/05/2017.
 */
import React from 'react';

export default class ProfilSentence extends React.Component {
    render() {
        const { text } = this.props;

        return(
            <em>{text}<br/></em>
        );
    }
}