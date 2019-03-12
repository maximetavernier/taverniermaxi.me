/**
 * Created by Tatav on 14/04/2017.
 */
import React from 'react';
import $ from 'jquery';

interface SectionNextButtonProps {
    label: string;
    onnext: any;
}

export default class NextButton extends React.Component<SectionNextButtonProps, any> {
    render() {
        const { label, onnext } = this.props;

        return(
            <button onClick={onnext} className="next-button">{label}</button>
        );
    }
}
