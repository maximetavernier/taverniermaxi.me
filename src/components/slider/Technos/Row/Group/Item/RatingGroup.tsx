/**
 * Created by Tatav on 02/04/2017.
 */
import React from 'react';
import RatingStar from './RatingStar';

interface RatingGroupProps {
    level: number;
}

interface RatingGroupState {
    maxValue: number;
    full: string;
    half: string;
    empty: string;
}

export default class RatingGroup extends React.Component<RatingGroupProps, RatingGroupState> {
    constructor(props: RatingGroupProps) {
        super(props);

        this.state = {
            maxValue: 5,
            full: "fa-star",
            half: "fa-star-half-o",
            empty: "fa-star-o"
        }
    }

    render() {
        const { level } = this.props;

        let full = [];
        for (let i = 0; i < (level / 1 - level % 1); ++i)
            full[i] = <RatingStar key={i} fill={this.state.full} />;

        let half = [];
        for (let i = 0; i < level % 1; ++i)
            half[i] = <RatingStar key={i + full.length} fill={this.state.half} />;

        let empty = [];
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