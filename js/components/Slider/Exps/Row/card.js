/**
 * Created by Tatav on 07/04/2017.
 */
import React from 'react';

export default class RowCard extends React.Component {
    render() {
        const { item } = this.props;

        return (
            <div className="card">
                <img className="card_image" src={`/assets/${item.asset}`} />
                <a href={item.url} target="_blank">
                    <div className="card_content">
                        <h4 className="card_title">{item.title}</h4>
                        <p className="card_subtitle">{item.subtitle}</p>
                        <p className="card_descr">{item.descr}</p>
                        <p className="card_year">{item.start} - {item.end}</p>
                    </div>
                </a>
            </div>
        );
    }
}