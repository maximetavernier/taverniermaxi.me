/**
 * Created by Tatav on 23/05/2017.
 */
import React from 'react';

import PassionItemFolderPreview from "./PassionItem/FolderPreview";
import Lightbox from "react-image-lightbox";
import PassionModel from "@models/Section/Passions/PassionModel";

const ArdraFx = require('./PassionItem/ardrafx');

interface PassionItemProps {
    passion: PassionModel;
}

interface PassionItemState {
    isOpen: boolean;
    showThumbnails: boolean;
    currentImage: number;
}

export default class PassionItem extends React.Component<PassionItemProps, PassionItemState> {
    constructor (props: PassionItemProps) {
        super(props);

        this.state = {
            isOpen: false,
            showThumbnails: false,
            currentImage: 0,
        };
    }

    componentDidMount() {
        const { passion } = this.props;

        new ArdraFx(document.querySelector(`.passions-content .folder#${passion.title.toLowerCase()}`));
    }

    openLightbox(event: any) {
        event.preventDefault();
        this.setState({
            currentImage: this.state.currentImage,
            isOpen: true,
        });
    }

    closeLightbox () {
        this.setState({
            currentImage: 0,
            isOpen: false,
        });
    }

    movePrevious() {
        const { content } = this.props.passion;

        this.setState({
            currentImage: (this.state.currentImage + content.length - 1) % content.length,
        })
    }

    moveNext() {
        const { content } = this.props.passion;

        this.setState({
            currentImage: (this.state.currentImage + 1) % content.length,
        });
    }

    render() {
        const { isOpen, currentImage } = this.state;
        const { content, icon, title } = this.props.passion;

        const minTitle = title.toLowerCase();

        return(
            <div className="passion">
                <div id={minTitle} className="folder">
                    <div className="folder_feedback"></div>
                    <PassionItemFolderPreview content={content} />
                    <a href={`${title}-folder_icon`} onClick={this.openLightbox.bind(this)}>
                        <div className="folder_icon" id={`${minTitle}-folder_icon`}>
                            <div className="folder_icon-img folder_icon-img-back">
                                <svg className="folder_icon-svg"><use xlinkHref="#icon-folderback"></use></svg>
                            </div>
                            <div className="folder_icon-img folder_icon-img-cover">
                                <svg className="folder_icon-svg"><use xlinkHref="#icon-foldercover"></use></svg>
                                <svg className="folder_icon-svg folder_icon-svg-deco"><use xlinkHref={`#icon-${icon}`}></use></svg>
                            </div>
                        </div>
                    </a>
                    <h4 className="folder_caption">{title}</h4>
                    {isOpen && (
                        <Lightbox
                            mainSrc={content[currentImage].src}
                            nextSrc={content[(currentImage + 1) % content.length].src}
                            prevSrc={content[(currentImage + content.length - 1) % content.length].src}
                            imageCaption={content[currentImage].caption}
                            onCloseRequest={this.closeLightbox.bind(this)}
                            onMovePrevRequest={this.movePrevious.bind(this)}
                            onMoveNextRequest={this.moveNext.bind(this)}
                            animationOnKeyInput={true}
                        />
                    )}
                </div>
            </div>
        );
    }
}