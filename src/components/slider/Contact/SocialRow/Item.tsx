/**
 * Created by Tatav on 05/04/2017.
 */
import React from 'react';
import Link from "@models/Section/Common/Link";

interface SocialRowItemProps {
    link: Link;
}

export default class Item extends React.Component<SocialRowItemProps, any> {
    constructor(props: SocialRowItemProps) {
        super(props);
    }

    render() {
        const { link } = this.props;

        return(
            <a href={link.url} target="_blank">
                <i className={`devicons devicons-${link.icon}`}></i>
            </a>
        );
    }
}