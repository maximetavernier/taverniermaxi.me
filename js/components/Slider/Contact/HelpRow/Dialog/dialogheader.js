/**
 * Created by Tatav on 27/05/2017.
 */
import React from 'react';

export default class DialogHeader extends React.Component {
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