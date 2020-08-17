/**
 * Created by Tatav on 05/04/2017.
 */
import React from 'react';

export default class EmailRow extends React.Component {
    render() {
        return(
            <div className="row email-row">
                <i className="fa fa-envelope"></i>
                <span>{this.props.email}</span>
            </div>
        );
    }
}