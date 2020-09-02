/**
 * Created by Tatav on 23/05/2017.
 */
import React from 'react';

import FolderPreview from "./Passion/folderpreview";

import Lightbox from 'react-images';

export default class Passion extends React.Component {
    constructor () {
        super();

        this.state = {
            lightboxIsOpen: false,
            showThumbnails: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }

    componentDidMount() {
        const { passion } = this.props;

        new ArdraFx(document.querySelector(`.passions-content .folder#${passion.title.toLowerCase()}`));
    }

    openLightbox (event) {
        event.preventDefault();
        this.setState({
            currentImage: this.state.currentImage,
            lightboxIsOpen: true,
        });
    }

    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }

    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    gotoImage (index) {
        this.setState({
            currentImage: index,
        });
    }

    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const { passion } = this.props;
        const title = passion.title.toLowerCase();

        return(
            <div className="passion">
                <div id={title} className="folder">
                    <div className="folder_feedback"></div>
                    <FolderPreview content={passion.content} />
                    <a href={`${passion.title}-folder_icon`} onClick={this.openLightbox}>
                        <div className="folder_icon" id={`${title}-folder_icon`}>
                            <div className="folder_icon-img folder_icon-img-back">
                                <svg className="folder_icon-svg"><use xlinkHref="#icon-folderback"></use></svg>
                            </div>
                            <div className="folder_icon-img folder_icon-img-cover">
                                <svg className="folder_icon-svg"><use xlinkHref="#icon-foldercover"></use></svg>
                                <svg className="folder_icon-svg folder_icon-svg-deco"><use xlinkHref={`#icon-${passion.icon}`}></use></svg>
                            </div>
                        </div>
                    </a>
                    <h4 className="folder_caption">{passion.title}</h4>
                    <Lightbox
                        currentImage={this.state.currentImage}
                        images={passion.content}
                        isOpen={this.state.lightboxIsOpen}
                        onClickImage={this.handleClickImage}
                        onClickNext={this.gotoNext}
                        onClickPrev={this.gotoPrevious}
                        onClickThumbnail={this.gotoImage}
                        onClose={this.closeLightbox}
                        showThumbnails={this.state.showThumbnails} />
                </div>
            </div>
        );
    }
}