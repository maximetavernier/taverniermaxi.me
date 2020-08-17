/**
 * Created by Tatav on 29/05/2017.
 */
import React from 'react';

import Track from './PendingList/Track';

export default class PendingList extends React.Component {
    removePending(track) {
        this.props.removePending(track);
    }

    render() {
        const { pending } = this.props;

        return(
            <nav className="pendinglist">
                <table className="pendinglist_table">
                    <thead>
                    <tr>
                        <th>En attente</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {pending.map((tr, key) =>
                            <Track key={key} track={tr} removePending={this.removePending.bind(this)} />
                        )}
                    </tbody>
                </table>
            </nav>
        )
    }
}