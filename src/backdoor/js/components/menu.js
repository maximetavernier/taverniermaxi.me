/**
 * Created by Tatav on 27/05/2017.
 */
import React from 'react';

import PlaylistManager from './playlistmanager';
import Logout from './logout';

export default class Menu extends React.Component {
    render() {
        <div>
            <Logout/>
            <PlaylistManager/>
        </div>
    }
}