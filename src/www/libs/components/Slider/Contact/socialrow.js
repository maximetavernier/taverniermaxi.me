/**
 * Created by Tatav on 05/04/2017.
 */
import React from 'react';
import ContactItem from "./Item/item";

export default class SocialRow extends React.Component {
    render() {
        const { links } = this.props;

        return(
            <div className="row social-row">
                {links.map((item, key) =>
                    <ContactItem key={key} link={item} />
                )}
            </div>
        );
    }
}