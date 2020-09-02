/**
 * Created by Tatav on 27/05/2017.
 */
import React from 'react';

export default class DialogFooter extends React.Component {
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