/**
 * Created by Tatav on 30/05/2017.
 */
import React from 'react';

export default class Track extends React.Component {
    removePending() {
        const { track } = this.props;

        this.props.removePending(track);
    }

    render() {
        const { track } = this.props;

        if (track != null)
            return(
                <tr>
                    <td>{`${track.artist} - ${track.song.substr(0, 16)}${track.song.length > 16 ? "..." : ""} (${track.category})`}</td>
                    <td><i className="glyphicon glyphicon-remove-sign" onClick={this.removePending.bind(this)}></i></td>
                </tr>
        );
        else
            return null;
    }
}