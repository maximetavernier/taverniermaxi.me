/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

export default class GroupTitle extends React.Component {
    render() {
        return (
            <h3>
                {this.props.groupTitle}
            </h3>
        );
    }
}