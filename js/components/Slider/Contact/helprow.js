/**
 * Created by Tatav on 25/05/2017.
 */
import React from 'react';
import ReactTooltip from 'react-tooltip';

import Dialog from './HelpRow/Dialog';

export default class HelpRow extends React.Component {
    componentDidMount() {
        this.trigger_dialog = this.refs.trigger_dialog;

        let dialog = new DialogEl(document.getElementById('dialog-1'), {
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

        this.trigger_dialog.addEventListener('click', function(ev) {
            dialog.open();
        });
    }


    render() {
        const { help } = this.props;
        const { cv } = help;
        const { info } = help;

        return (
            <div className="help-row">
                <a href={cv.link} className="trigger-dialog" data-tip data-for="help-cv">
                    <i className="devicons devicons-download"></i>
                </a>
                <ReactTooltip id="help-cv" place="bottom" type="dark" effect="float">
                    <p>{cv.caption}</p>
                </ReactTooltip>
                <a ref="trigger_dialog" className="trigger-dialog" data-tip data-for="help-infos">
                    <i className="devicons devicons-help"></i>
                </a>
                <ReactTooltip id="help-infos" place="bottom" type="dark" effect="float">
                    <p>{info.caption}</p>
                </ReactTooltip>
                <Dialog info={info} />
            </div>
        );
    }
}