/**
 * Created by Tatav on 07/04/2017.
 */
import React from 'react';

interface ExperiencesRowTitleProps {
    title: string;
}

export default class RowTitle extends React.Component<ExperiencesRowTitleProps, any> {
    constructor(props: ExperiencesRowTitleProps) {
        super(props);
    }

    render() {
        const { title } = this.props;

        return (
            <h3>{title}</h3>
        );
    };
}