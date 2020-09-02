/**
 * Created by Tatav on 24/05/2017.
 */
import React from 'react';

export default class DescrImg extends React.Component {
    render() {
        const { image } = this.props;

        return(
            <figure className="folder_thumb">
                <img src={image.src} />
                <figcaption>{image.short}</figcaption>
            </figure>
        );
    }
}