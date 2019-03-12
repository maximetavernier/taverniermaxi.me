/**
 * Created by Tatav on 27/05/2017.
 */
import React from 'react';
import BodyItem from './Body/Item';
import InfoHeader from "@models/Section/Contact/HelpModel/HelpInfos/InfoHeader";
import InfoContent from "@models/Section/Contact/HelpModel/HelpInfos/InfoContent";

interface HelpModalBodyProps {
    infos: InfoContent[];
}

export default class Body extends React.Component<HelpModalBodyProps, any> {
    constructor(props: HelpModalBodyProps) {
        super(props);
    }

    render() {
        const { infos } = this.props;

        return (
            <div className="dialog_body">
                <div className="actions">
                    {infos.map((content: InfoContent, key: number) =>
                        <BodyItem key={key} content={content} />
                    )}
                </div>
            </div>
        );
    }
}