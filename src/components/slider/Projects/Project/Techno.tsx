/**
 * Created by Tatav on 14/04/2017.
 */
import React from 'react';

interface TechnoProps {
    key: number;
    icon: string;
}

export default class Techno extends React.Component<TechnoProps, any> {
    constructor (props: TechnoProps) {
        super(props);
    }

    render() {
        const { icon } = this.props;

        return(
            <i className={`devicons devicons-${icon}`}></i>
        );
    }
}