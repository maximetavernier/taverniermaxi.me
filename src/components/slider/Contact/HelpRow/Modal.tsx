/**
 * Created by Tatav on 25/05/2017.
 */
import React from 'react';

import ModalHeader from './Modal/Header';
import ModalFooter from './Modal/Footer';
import ModalBody from "./Modal/Body";
import HelpInfos from "@models/Section/Contact/HelpModel/HelpInfos";

interface HelpModalProps {
    info: HelpInfos;
}

export default class Modal extends React.Component<HelpModalProps, any> {
    constructor(props: HelpModalProps) {
        super(props);
    }

    render() {
        const { info } = this.props;
        const { header, infos, footer } = info;

        return(
            <div className="dialog" id="dialog-1">
                <div className="mover-wrap dialog_content">
                    <div className="handle"></div>
                    <div className="mover">
                        <div className="dialog_content-inner">
                            <ModalHeader info={header} />
                            <ModalBody infos={infos} />
                            <ModalFooter info={footer} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}