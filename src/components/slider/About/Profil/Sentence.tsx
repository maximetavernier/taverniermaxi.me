/**
 * Created by Tatav on 23/05/2017.
 */
import React from 'react';

interface ProfilSentenceProps {
    key: number;
    text: string;
}

export default class Sentence extends React.Component<ProfilSentenceProps, any> {
    constructor(props: ProfilSentenceProps) {
        super(props);
    }

    render() {
        const { text } = this.props;

        return(
            <em>{text}<br/></em>
        );
    }
}