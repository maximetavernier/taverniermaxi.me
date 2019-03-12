/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

import SectionTitle from './Section/Title';
import ContactHelpRow from './Contact/HelpRow';
import ContactSocialRow from './Contact/SocialRow';
import ContactEmailRow from './Contact/EmailRow';
import SectionModel from "@models/SectionModel";
import ContactSectionModel from "@models/Section/ContactSectionModel";

interface ContactSectionProps {
    key: number;
    data: SectionModel;
}

export default class ContactSection extends React.Component<ContactSectionProps, any> {
    constructor(props: ContactSectionProps) {
        super(props);
    }

    render() {
        const { data } = this.props;
        const { title, help, links, email } = data as ContactSectionModel;

        return(
            <div>
                <SectionTitle label={title} />
                <ContactHelpRow help={help} />
                <ContactSocialRow links={links} />
                <ContactEmailRow email={email} />
            </div>
        );
    }
}