/**
 * Created by Tatav on 05/04/2017.
 */
import React from 'react';
import ContactSocialRowItem from './SocialRow/Item';
import Link from "@models/Section/Common/Link";

interface SocialRowProps {
    links: Link[];
}

export default class SocialRow extends React.Component<SocialRowProps, any> {
    constructor(props: SocialRowProps) {
        super(props);
    }

    render() {
        const { links } = this.props;

        return(
            <div className="row social-row">
                {links.map((link: Link, key: number) =>
                    <ContactSocialRowItem key={key} link={link} />
                )}
            </div>
        );
    }
}