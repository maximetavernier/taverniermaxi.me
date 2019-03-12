/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

import SectionTitle from './Section/Title';
import TechnosRow from './Technos/Row';
import GroupModel from "@models/Section/Technos/GroupModel";
import TechnosSectionModel from "@models/Section/TechnosSectionModel";
import SectionModel from "@models/SectionModel";


interface TechnosSectionProps {
    data: SectionModel;
}

interface TechnosSectionState {
    rowLimit: number;
}

export default class TechnosSection extends React.Component<TechnosSectionProps, TechnosSectionState> {
    constructor(props: TechnosSectionProps) {
        super(props);

        this.state = {
            rowLimit: 2
        }
    }

    render() {
        const { data } = this.props;
        const { groups, title } = data as TechnosSectionModel;
        const { rowLimit } = this.state;
        let rows: GroupModel[][] = [], i: number = 0;

        groups.map((group: GroupModel) => {
            if (rows[i] === undefined)
                rows[i] = [];
            rows[i].push(group);
            i = rows[i].length === rowLimit ? i + 1 : i;
        });

        return(
            <div>
                <SectionTitle label={title}/>
                {rows.map((row: GroupModel[], key: number) =>
                    <TechnosRow key={key} groups={row}/>
                )}
            </div>
        );
    }
}