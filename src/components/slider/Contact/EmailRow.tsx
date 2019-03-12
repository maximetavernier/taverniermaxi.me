/**
 * Created by Tatav on 05/04/2017.
 */
import React from 'react';

interface ContactEmailRowProps {
    email: string;
}

export default class EmailRow extends React.Component<ContactEmailRowProps, any> {
    constructor(props: ContactEmailRowProps) {
        super(props);
    }

    render() {
        const { email } = this.props;

        return(
            <div className="row email-row">
                <i className="fa fa-envelope"></i>
                <span>{email}</span>
            </div>
        );
    }
}