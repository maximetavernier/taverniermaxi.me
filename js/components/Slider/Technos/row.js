/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';
import TechnoGroup from './Group';

export default class Row extends React.Component {
    render() {
        const { groups } = this.props;

        return (
            <div className="row">
                {groups.map((item, key) =>
                    <TechnoGroup key={key} group={item} />
                )}
            </div>
        );
    }
}