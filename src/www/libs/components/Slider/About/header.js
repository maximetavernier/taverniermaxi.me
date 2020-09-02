/**
 * Created by Tatav on 14/04/2017.
 */
import React from 'react';

export default class AboutHeader extends React.Component {
    render() {
        const { firstname } = this.props;
        const { lastname } = this.props;

        return(
            <div className="clipped">
                <h2>{firstname}<br/>{lastname}</h2>
            </div>
        );
    }
}
