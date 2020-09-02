/**
 * Created by Tatav on 07/04/2017.
 */
import React from 'react';

export default class RowTitle extends React.Component {
    render() {
        return (
            <h3>
                {this.props.title}
            </h3>
        );
    };
}