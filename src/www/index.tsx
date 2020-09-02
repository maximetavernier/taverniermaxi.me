'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Slider from '@components/Slider';
import Loader from '@components/Loader';
import DataModel from '@models/DataModel';

const managedLangs = [
    'fr',
    'en',
];

(() => {
    const lang: string = navigator.language.substr(0, 2);
    const data: DataModel = require(`../assets/${(managedLangs.includes(lang) ? lang : 'en')}.js`);
    document.title = data.title;

    ReactDOM.render(<Loader/>, document.getElementById('react-loader'));
    ReactDOM.render(<Slider sections={data.sections} />, document.getElementById('react-slider'));
})();