/**
 * Created by Tatav on 23/05/2017.
 */
import React from 'react';

import GridPassionItem from './Grid/PassionItem'
import PassionModel from "@models/Section/Passions/PassionModel";

interface PassionsGridProps {
    passions: PassionModel[];
}

export default class Grid extends React.Component<PassionsGridProps, any> {
    render() {
        const { passions } = this.props;

        return(
            <div className="passions-grid">
                {passions.map((passion: PassionModel, key: number) =>
                    <GridPassionItem key={key} passion={passion} />
                )}
            </div>
        );
    }
}