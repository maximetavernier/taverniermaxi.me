/**
 * Created by Tatav on 27/05/2017.
 */
import React from 'react';

import PlaylistManager from './PlaylistManager';
import Logout from './Logout';

export default class Menu extends React.Component {
    render() {
        <div>
            <Logout/>
            <PlaylistManager/>
        </div>
    }
}