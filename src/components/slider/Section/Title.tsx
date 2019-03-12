/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

interface SectionTitleProps {
    label: string;
}

export default class Title extends React.Component<SectionTitleProps> {
    render() {
        const {label} = this.props;

        return(
            <h2>{label}</h2>
        );
    }
}