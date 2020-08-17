/**
 * Created by Tatav on 25/05/2017.
 */
import React from 'react';

import DialogHeader from './Dialog/DialogHeader';
import DialogFooter from './Dialog/DialogFooter';
import DialogBody from "./Dialog/dialogbody";

export default class Dialog extends React.Component {
    render() {
        const { info } = this.props;

        return(
            <div className="dialog" id="dialog-1">
                <div className="mover-wrap dialog_content">
                    <div className="handle"></div>
                    <div className="mover">
                        <div className="dialog_content-inner">
                            <DialogHeader info={info.header} />
                            <DialogBody infos={info.infos} />
                            <DialogFooter info={info.footer} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}