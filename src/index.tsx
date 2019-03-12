'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


import Slider from "./components/Slider";
import Loader from "./components/Loader";
import DataModel from "@models/DataModel";

(() => {
    const lang: string = navigator.language;
    const data: DataModel = require(`../assets/${lang}.js`);
    document.title = data.title;

    ReactDOM.render(<Loader/>, document.getElementById('react-loader'));
    ReactDOM.render(<Slider sections={data.sections} />, document.getElementById('react-slider'));
})();