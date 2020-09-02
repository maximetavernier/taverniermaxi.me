/**
 * Created by Tatav on 05/04/2017.
 */
import React from 'react';

export default class ContactItem extends React.Component {
    render() {
        const { link } = this.props;

        return(
            <a href={link.url} target="_blank">
                <i className={`devicons devicons-${link.icon}`}></i>
            </a>
        );
    }
}