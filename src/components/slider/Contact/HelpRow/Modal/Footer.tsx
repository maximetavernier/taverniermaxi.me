/**
 * Created by Tatav on 27/05/2017.
 */
import React from 'react';
import InfoFooter from "@models/Section/Contact/HelpModel/HelpInfos/InfoFooter";

interface HelpModalFooterProps {
    info: InfoFooter;
}

export default class Footer extends React.Component<HelpModalFooterProps, any> {
    constructor(props: HelpModalFooterProps) {
        super(props);
    }

    render() {
        const { info } = this.props;
        const { copyright } = info;

        return(
            <div className="dialog_footer">
                <p>{copyright[0]}<br />{copyright[1]}</p>
            </div>
        );
    }
}