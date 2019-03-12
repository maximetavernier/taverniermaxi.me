/**
 * Created by Tatav on 24/05/2017.
 */
import React from 'react';
import ImageModel from "@models/Section/Common/ImageModel";

interface ImageDescriptionProps {
    image: ImageModel;
}

export default class ImageDescription extends React.Component<ImageDescriptionProps, any> {
    constructor(props: ImageDescriptionProps) {
        super(props);
    }

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