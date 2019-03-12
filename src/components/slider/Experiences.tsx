/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

import SectionTitle from './Section/Title';
import ExperiencesRow from './Experiences/Row';
import SectionModel from "@models/SectionModel";
import ExperiencesSectionModel from "@models/Section/ExperiencesSectionModel";
import ExperiencesItem from "@models/Section/Experiences/Item";

interface ExperiencesSectionProps {
    key: number;
    data: SectionModel;
}

export default class ExperiencesSection extends React.Component<ExperiencesSectionProps, any> {
    constructor(props: ExperiencesSectionProps) {
        super(props);
    }

    render() {
        const { data } = this.props;
        const { exps, title, studiesTitle, internshipsTitle } = data as ExperiencesSectionModel;
        let studies: ExperiencesItem[] = [];
        let internships: ExperiencesItem[] = [];

        exps.map((item: ExperiencesItem) => {
            const type = item.type.toLowerCase();

            if (type.localeCompare("study") === 0)
                studies.push(item);
            else if (type.localeCompare("internship") === 0)
                internships.push(item);
        });

        return(
            <div>
                <SectionTitle label={title} />
                <ExperiencesRow title={studiesTitle} exps={studies} />
                <ExperiencesRow title={internshipsTitle} exps={internships} />
            </div>
        );
    }
}
