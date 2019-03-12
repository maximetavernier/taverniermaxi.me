/**
 * Created by Tatav on 14/04/2017.
 */
import React from 'react';

interface AboutHeaderProps {
    firstname: string;
    lastname: string;
}

export default class Header extends React.Component<AboutHeaderProps, any> {
    constructor(props: AboutHeaderProps) {
        super(props);
    }

    render() {
        const { firstname, lastname } = this.props;

        return(
            <div className="clipped">
                <h2>{firstname}<br/>{lastname}</h2>
            </div>
        );
    }
}
