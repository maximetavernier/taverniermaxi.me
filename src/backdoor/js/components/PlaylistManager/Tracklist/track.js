/**
 * Created by Tatav on 29/05/2017.
 */
import React from 'react';

export default class Track extends React.Component {
    addPending() {
        const { track } = this.props;

        this.props.addPending(track);
    }

    render() {
        const { track } = this.props;

        return(
            <tr>
                <td>{track.artist}</td>
                <td>{track.song}</td>
                <td>{track.category}</td>
                <td><i className="glyphicon glyphicon-plus-sign" onClick={this.addPending.bind(this)}></i></td>
            </tr>
        );
    }
}