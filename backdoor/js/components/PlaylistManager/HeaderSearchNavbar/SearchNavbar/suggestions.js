/**
 * Created by Tatav on 30/05/2017.
 */
import React from 'react';

import Track from './Suggestions/Track';

export default class Suggestion extends React.Component {
    addPending(track) {
        this.props.addPending(track);
    }

    render() {
        const { tracks } = this.props;

        return(
            <table className="suggestions_table">
                <tbody>
                    {tracks.map((tr, key) =>
                        <Track key={key} track={tr} addPending={this.addPending.bind(this)} />
                    )}
                </tbody>
            </table>
        );
    }
}