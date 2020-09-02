/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

export default class Title extends React.Component {
    render() {
        const {label} = this.props;

        return(
            <h2>{label}</h2>
        );
    }
}