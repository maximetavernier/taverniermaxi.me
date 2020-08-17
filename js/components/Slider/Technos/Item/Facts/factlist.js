/**
 * Created by Tatav on 31/05/2017.
 */
import React from 'react';

import Fact from './Fact';

export default class FactList extends React.Component {
    render() {
        const { facts } = this.props;

        return(
            <ul className="facts">
                {facts.map((fact, key) =>
                    <Fact key={key} fact={fact} />
                )}
            </ul>
        );
    }
}