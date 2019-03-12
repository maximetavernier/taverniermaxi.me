/**
 * Created by Tatav on 31/05/2017.
 */
import React from 'react';

import Fact from './Fact';

interface FactListProps {
    facts: string[];
}

export default class FactList extends React.Component<FactListProps, any> {
    constructor(props: FactListProps) {
        super(props);
    }

    render() {
        const { facts } = this.props;

        return(
            <ul className="facts">
                {facts.map((fact: string, key: number) =>
                    <Fact key={key} fact={fact} />
                )}
            </ul>
        );
    }
}