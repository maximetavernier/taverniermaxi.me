/**
 * Created by Tatav on 23/05/2017.
 */
import React from 'react';

import Passion from './Grid/passion'

export default class PassionGrid extends React.Component {
    render() {
        const { passions } = this.props;

        return(
            <div className="passions-grid">
                {passions.map((passion, key) =>
                    <Passion key={key} passion={passion} />
                )}
            </div>
        );
    }
}