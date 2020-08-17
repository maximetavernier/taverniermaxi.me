/**
 * Created by Tatav on 29/05/2017.
 */
import React from 'react';

import Track from './Tracklist/Track';

export default class Tracklist extends React.Component {
    componentDidMount() {
        const { tracklist_table } = this.refs;

        let bodyCells = $(tracklist_table).find('tbody tr:first').children();
        let colWidth;

        colWidth = bodyCells.map(function () {
            return $(this).width();
        }).get();
        $(tracklist_table).find('thead tr').children().each(function (i, v) {
            $(v).width(colWidth[i]);
        });


        $(tracklist_table).tablesorter();
    }

    addPending(track) {
        this.props.addPending(track);
    }

    render() {
        const { tracklist } = this.props;

        return(
            <table ref="tracklist_table" className="tracklist_table tablesorter">
                <thead>
                    <tr>
                        <th>Artiste</th>
                        <th>Chanson</th>
                        <th>Categorie</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tracklist.map((tr, key) =>
                        <Track key={key} track={tr} addPending={this.addPending.bind(this)} />
                    )}
                </tbody>
            </table>
        );
    }
}