/**
 * Created by Tatav on 27/05/2017.
 */
import React from 'react';
import InfoHeader from "@models/Section/Contact/HelpModel/HelpInfos/InfoHeader";

interface HelpModalHeaderProps {
    info: InfoHeader;
}

export default class Header extends React.Component<HelpModalHeaderProps, any> {
    constructor(props: HelpModalHeaderProps) {
        super(props);
    }

    render() {
        const { info } = this.props;

        return(
            <div className="dialog_header">
                <h3>{info.title}</h3>
                <button className="action action-close">
                    <i className="devicons devicons-cross"></i>
                    <span className="text-hidden">{info.closeLabel}</span>
                </button>
            </div>
        );
    }
}