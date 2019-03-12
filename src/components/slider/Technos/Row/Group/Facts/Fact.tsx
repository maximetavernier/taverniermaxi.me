/**
 * Created by Tatav on 31/05/2017.
 */
import React from 'react';

interface FactProps {
    key: number;
    fact: string;
}

export default class Fact extends React.Component<FactProps, any> {
    constructor(props: FactProps) {
        super(props);
    }

    render() {
        const { fact } = this.props;

        return(
            <li>{fact}</li>
        );
    }
}