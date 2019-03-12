/**
 * Created by Tatav on 07/04/2017.
 */
import React from 'react';
import RowTitle from './Row/Title';
import RowCard from './Row/Card';
import ExperiencesItem from "@models/Section/Experiences/Item";

interface ExperiencesRowProps {
    title: string;
    exps: ExperiencesItem[];
}

export default class Row extends React.Component<ExperiencesRowProps, any> {
    constructor(props: ExperiencesRowProps) {
        super(props);
    }

    render() {
        const { title, exps } = this.props;

        return (
            <div className="container">
                <RowTitle title={title}/>
                <div className="row">
                    {exps.map((exp: ExperiencesItem, key: number) =>
                        <RowCard key={key} exp={exp} />
                    )}
                </div>
            </div>
        );
    }
}
