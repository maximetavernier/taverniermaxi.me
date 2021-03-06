/**
 * Render
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Slider from './components/Slider';
import Loader from "./components/Loader";

/**
 * React Rendering function
 */
function render(json) {
    let data = $.parseJSON(json);

    document.title = data.title;

    ReactDOM.render(<Loader/>, document.getElementById('react-loader'));
    ReactDOM.render(<Slider sections={data.sections} />, document.getElementById('react-slider'));
}

$(document).ready(function() {
    $.get('../assets/' + (navigator.language || navigator.userLanguage) + '.json', render, 'text').fail(function () {
        $.get('../assets/en.json', render, 'text');
    });
});