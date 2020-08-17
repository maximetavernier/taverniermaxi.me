/**
 * Created by Tatav on 24/05/2017.
 */
import React from 'react';

import DescrImg from "./FolderPreview/DescrImg";

export default class FolderPreview extends React.Component {
    render() {
        const { content } = this.props;

        return(
            <div className="folder_preview">
                {content.map((image, key) =>
                    <DescrImg key={key} image={image} />
                )}
            </div>
        );
    }
}