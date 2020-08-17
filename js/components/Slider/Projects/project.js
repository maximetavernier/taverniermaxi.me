/**
 * Created by Tatav on 14/04/2017.
 */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import Lightbox from 'react-images';

import Poster from './Project/Poster';

export default class Project extends React.Component {
    constructor () {
        super();

        this.state = {
            lightboxIsOpen: false,
            showThumbnails: true,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
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
        const { project } = this.props;
        const { tooltip } = this.props;
        const { gallery } = project;

        return (
            <div>
                <a href={project.asset} className="tilter" onClick={this.openLightbox} data-tip data-for={`${project.title}-tooltip`}>
                    <Poster project={project} />
                </a>
                <ReactTooltip id={`${project.title}-tooltip`} place="bottom" type="dark" effect="float">
                    <span>{tooltip}</span>
                </ReactTooltip>
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={gallery}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                    showThumbnails={this.state.showThumbnails} />
            </div>
        );
    }
}