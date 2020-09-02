/**
 * Created by Tatav on 27/05/2017.
 */
import React from 'react';

import Playlist from '../../assets/Playlist Manager/playlist.json';

import HeaderSearchNavbar from './PlaylistManager/headersearchnavbar';
import Scene from './PlaylistManager/scene';
import Tracklist from './PlaylistManager/tracklist';
import PendingList from "./PlaylistManager/pendinglist";

export default class PlaylistManager extends React.Component {
    constructor() {
        super();

        this.state = {
            tracklist: [],
            pending: []
        };

        Playlist.map((collection) => {
            collection.list.map((group) => {
                group.tracks.map((song) => {
                    this.state.tracklist.push({
                        artist: group.artist,
                        song: song,
                        category: collection.category
                    });
                })
            })
        });
    }

    removePending(track) {
        const { pending } = this.state;
        const { pendingList } = this.refs;

        let index = pending.indexOf(track);
        if (index > -1)
            pending.splice(index, 1);
        pendingList.forceUpdate();
    }

    addPending(track) {
        const { pending } = this.state;
        const { pendingList } = this.refs;

        pending.push(track);
        pendingList.forceUpdate();
    }

    render() {
        const { tracklist } = this.state;
        const { pending } = this.state;

        return(
            <div>
                <HeaderSearchNavbar tracklist={tracklist} addPending={this.addPending.bind(this)} />
                <Scene />
                <Tracklist tracklist={tracklist} addPending={this.addPending.bind(this)} />
                <PendingList ref="pendingList" pending={pending} removePending={this.removePending.bind(this)} />
            </div>
        );
    }
}