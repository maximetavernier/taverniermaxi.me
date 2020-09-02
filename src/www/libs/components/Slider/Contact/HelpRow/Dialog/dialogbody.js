/**
 * Created by Tatav on 27/05/2017.
 */
import React from 'react';

import DialogBodyItem from './Body/dialogbodyitem';

export default class DialogBody extends React.Component {
    render() {
        const { infos } = this.props;

        return (
            <div className="dialog_body">
                <div className="actions">
                    {infos.map((content, key) =>
                        <DialogBodyItem key={key} content={content} />
                    )}
                </div>
            </div>
        );
    }
}