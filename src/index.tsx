'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


import Slider from "./components/Slider";
import Loader from "./components/Loader";
import DataModel from "@models/DataModel";

(() => {
    const lang: string = navigator.language.substr(0, 2);
    console.log(lang);
    console.log(`../assets/${lang}.js`);
    const data: DataModel = require(`../assets/${lang}.js`);
    console.log(data);
    document.title = data.title;

    ReactDOM.render(<Loader/>, document.getElementById('react-loader'));
    ReactDOM.render(<Slider sections={data.sections} />, document.getElementById('react-slider'));
})();