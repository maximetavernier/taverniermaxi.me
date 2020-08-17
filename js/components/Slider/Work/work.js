/**
 * Created by Tatav on 10/04/2017.
 */
import React from 'react';

export default class Work extends React.Component {
    render() {
        const { label } = this.props;

        return (
            <div className="container onwork">
                <img src="/assets/onwork.png" alt={label} />
                <h3>{label}</h3>
            </div>
        );
    }
}