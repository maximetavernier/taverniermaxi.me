/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

import Title from './Section/Title';
import HelpRow from './Contact/HelpRow';
import SocialRow from './Contact/SocialRow';
import EmailRow from './Contact/EmailRow';

export default class ContactSection extends React.Component {
    render() {
        const { data } = this.props;

        return(
            <div>
                <Title label={data.title} />
                <HelpRow help={data.help} />
                <SocialRow links={data.links} />
                <EmailRow email={data.email} />
            </div>
        );
    }
}