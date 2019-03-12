/**
 * Created by Tatav on 02/04/2017.
 */
import React from 'react';

interface RatingStarProps {
    key: number;
    fill: string;
}

export default class RatingStar extends React.Component<RatingStarProps, any> {
    render() {
        const { fill } = this.props;

        return (
            <li>
                <i className={`fa ${fill}`}></i>
            </li>
        );
    }
}