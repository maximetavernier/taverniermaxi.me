/**
 * Created by Tatav on 02/04/2017.
 */
import React from 'react';
import RatingStar from './star';

export default class RatingGroup extends React.Component {
    constructor() {
        super();
        this.state = {
            maxValue: 5,
            full: "fa-star",
            half: "fa-star-half-o",
            empty: "fa-star-o"
        }
    }

    render() {
        const { level } = this.props;

        var full = [];
        for (let i = 0; i < (level / 1 - level % 1); ++i)
            full[i] = <RatingStar key={i} fill={this.state.full} />;

        var half = [];
        for (let i = 0; i < level % 1; ++i)
            half[i] = <RatingStar key={i + full.length} fill={this.state.half} />;

        var empty = [];
        for (let i = 0; i < this.state.maxValue - level - (level % 1); ++i)
            empty[i] = <RatingStar key={i + full.length + half.length} fill={this.state.empty} />;

        return(
            <ul className="rating">
                {full}
                {half}
                {empty}
            </ul>
        );
    }
}