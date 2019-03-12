/**
 * Created by Tatav on 24/05/2017.
 */
import React from 'react';

import FolderPreviewImageDescription from "./FolderPreview/ImageDescription";
import ImageModel from "@models/Section/Common/ImageModel";

interface FolderPreviewProps {
    content: ImageModel[];
}

export default class FolderPreview extends React.Component<FolderPreviewProps, any> {
    constructor(props: FolderPreviewProps) {
        super(props);
    }

    render() {
        const { content } = this.props;

        return(
            <div className="folder_preview">
                {content.map((image: ImageModel, key: number) =>
                    <FolderPreviewImageDescription key={key} image={image} />
                )}
            </div>
        );
    }
}