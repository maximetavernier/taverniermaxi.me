/**
 * Created by Tatav on 14/04/2017.
 */
import React from 'react';

export default class Techno extends React.Component {
    render() {
        const { icon } = this.props;

        return(
            <i className={`devicons devicons-${icon}`}></i>
        );
    }
}