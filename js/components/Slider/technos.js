/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

import Title from './Section/Title';
import Row from './Technos/row';

export default class TechnosSection extends React.Component {
    constructor() {
        super();

        this.state = {
            rowLimit: 2
        }
    }

    render() {
        const { data } = this.props;
        const { groups } = data;
        const { rowLimit } = this.state;
        let rows = [], i = 0;

        groups.map((group) => {
            if (rows[i] === undefined)
                rows[i] = [];
            rows[i].push(group);
            i = rows[i].length === rowLimit ? i + 1 : i;
        });

        return(
            <div>
                <Title label={data.title}/>
                {rows.map((row, key) =>
                    <Row key={key} groups={row}/>
                )}
            </div>
        );
    }
}