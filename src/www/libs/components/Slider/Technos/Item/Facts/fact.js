/**
 * Created by Tatav on 31/05/2017.
 */
import React from 'react';

export default class Fact extends React.Component {
    render() {
        const { fact } = this.props;

        return(
            <li>{fact}</li>
        );
    }
}