/**
 * Created by Tatav on 02/04/2017.
 */
import React from 'react';

export default class RatingStar extends React.Component {
    render() {
        const { fill } = this.props;

        return (
            <li>
                <i className={`fa ${fill}`}></i>
            </li>
        );
    }
}