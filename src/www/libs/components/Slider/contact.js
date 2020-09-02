/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

import Title from './Section/title';
import HelpRow from './Contact/helprow';
import SocialRow from './Contact/socialrow';
import EmailRow from './Contact/emailrow';

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