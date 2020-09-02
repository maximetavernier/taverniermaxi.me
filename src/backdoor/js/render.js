/**
 * Render
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Loader from './components/loader';
import PlaylistManager from './components/playlistmanager';
import Login from './components/login';

/**
 * React Rendering function
 */
function render() {
    let body = document.getElementById('react-body');

    if (body !== null) {
        ReactDOM.render(<Loader/>, document.getElementById('react-loader'));
        ReactDOM.render(<PlaylistManager/>, body);
    } else {
        ReactDOM.render(<Login /> ,document.getElementById('react-login'));
    }
}

$(document).ready(function() {
    render();
});

