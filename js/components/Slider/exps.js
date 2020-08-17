/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

import Title from './Section/Title';
import Row from './Exps/Row';

export default class ExpsSection extends React.Component {
    render() {
        const { data } = this.props;
        let studies = [];
        let internships = [];

        data.exps.map((item) => {
            const type = item.type.toLowerCase();

            if (type.localeCompare("study") === 0)
                studies.push(item);
            else if (type.localeCompare("internship") === 0)
                internships.push(item);
        });

        return(
            <div>
                <Title label={data.title} />
                <Row title={data.studiesTitle} data={studies} />
                <Row title={data.internshipsTitle} data={internships} />
            </div>
        );
    }
}
