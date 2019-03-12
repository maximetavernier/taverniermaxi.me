/**
 * Created by Tatav on 07/04/2017.
 */
import React from 'react';
import ExperiencesItem from "@models/Section/Experiences/Item";

interface ExperiencesRowCardProps {
    key: number;
    exp: ExperiencesItem;
}

export default class RowCard extends React.Component<ExperiencesRowCardProps, any> {
    constructor(props: ExperiencesRowCardProps) {
        super(props);
    }

    render() {
        const { exp } = this.props;

        return (
            <div className="card">
                <img className="card_image" src={`${exp.asset}`} />
                <a href={exp.url} target="_blank">
                    <div className="card_content">
                        <h4 className="card_title">{exp.title}</h4>
                        <p className="card_subtitle">{exp.subtitle}</p>
                        <p className="card_descr">{exp.descr}</p>
                        <p className="card_year">{exp.start} - {exp.end}</p>
                    </div>
                </a>
            </div>
        );
    }
}