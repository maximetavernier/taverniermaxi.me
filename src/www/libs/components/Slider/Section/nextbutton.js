/**
 * Created by Tatav on 14/04/2017.
 */
import React from 'react';

export default class NextButton extends React.Component {
    moveDown() {
        $.fn.pagepiling.moveSectionDown();
    }

    render() {
        const { label } = this.props;

        return(
            <button onClick={this.moveDown} className="next-button">{label}</button>
        );
    }
}
