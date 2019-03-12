/**
 * Created by Tatav on 27/05/2017.
 */
import React from 'react';
import InfoContent from "@models/Section/Contact/HelpModel/HelpInfos/InfoContent";

interface HelpModalBodyItemProps {
    key: number;
    content: InfoContent;
}

export default class Item extends React.Component<HelpModalBodyItemProps, any> {
    constructor(props: HelpModalBodyItemProps) {
        super(props);
    }

    render() {
        const { content } = this.props;

        return(
            <div className="mover_element">
                <a href={content.url} className="action action-fav" target={content._blank ? "_blank" : "_self"}>
                    <i className={`devicons devicons-${content.icon} icon-action`}></i>
                    <span className="action_title">{content.title}</span>
                    <span className="action_subline">{content.descr}</span>
                </a>
            </div>
        );
    }
}