'use strict';

import React from 'react';

export default class Loader extends React.Component {
    constructor(props: {}) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="spinner"></div>
        );
    }
}