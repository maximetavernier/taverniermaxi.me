/**
 * Created by Tatav on 25/05/2017.
 */
import React from 'react';
import ReactTooltip from 'react-tooltip';

import Modal from './HelpRow/Modal';
import HelpModel from "@models/Section/Contact/HelpModel";

const DialogEl = require('./HelpRow/dialogel');

interface HelpRowProps {
    help: HelpModel;
}

export default class HelpRow extends React.Component<HelpRowProps, any> {
    constructor(props: HelpRowProps) {
        super(props);
    }

    componentDidMount() {
        const trigger_dialog = document.getElementById('trigger_dialog');

        if (trigger_dialog)
        {
            const dialog = new DialogEl(document.getElementById('dialog-1'), {
                mainElement : {
                    minscale : 0.6,
                    minopacity : 0.5,
                    //rX : 30,
                    rY : 40
                },
                innerElements : {tx : 100, ty : 100},
                // the element is considered out of bounds if its center (x,y) is either
                // x < outofbounds.x or x > win.width-outofbounds.x or
                // y < outofbounds.y or y > win.height - outofbounds.y
                outofbounds: {x : 0, y: 0}
            });

            trigger_dialog.addEventListener('click', function(_ev: any) {
                dialog.open();
            });
        }
    }


    render() {
        const { help } = this.props;
        const { cv, info } = help;

        return (
            <div className="help-row">
                <a href={cv.link} className="trigger-dialog" data-tip data-for="help-cv">
                    <i className="devicons devicons-download"></i>
                </a>
                <ReactTooltip id="help-cv" place="bottom" type="dark" effect="float">
                    <p>{cv.caption}</p>
                </ReactTooltip>
                <a id="trigger_dialog" className="trigger-dialog" data-tip data-for="help-infos">
                    <i className="devicons devicons-help"></i>
                </a>
                <ReactTooltip id="help-infos" place="bottom" type="dark" effect="float">
                    <p>{info.caption}</p>
                </ReactTooltip>
                <Modal info={info} />
            </div>
        );
    }
}