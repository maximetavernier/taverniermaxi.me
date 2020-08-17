/**
 * Created by Tatav on 07/04/2017.
 */
import React from 'react';
import RowTitle from './Row/Title';
import RowCard from './Row/Card';

export default class Row extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { data } = this.props;
        const { title } = this.props;

        return (
            <div className="container">
                <RowTitle title={title}/>
                <div className="row">
                    {data.map((study, key) =>
                        <RowCard key={key} item={study} />
                    )}
                </div>
            </div>
        );
    }
}
