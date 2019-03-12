/**
 * Created by Tatav on 14/04/2017.
 */
import React from 'react';
import ReactTooltip from 'react-tooltip';

import Poster from './Project/Poster';
import Lightbox from "react-image-lightbox";
import ProjectModel from "@models/Section/Projects/ProjectModel";

interface ProjectProps {
    key: number;
    project: ProjectModel;
    tooltip: string;
}

interface ProjectState {
    isOpen: boolean;
    showThumbnails: boolean;
    currentImage: number;
}

export default class Project extends React.Component<ProjectProps, ProjectState> {
    constructor (props: ProjectProps) {
        super(props);

        this.state = {
            isOpen: false,
            showThumbnails: true,
            currentImage: 0,
        };
    }

    openLightbox (event: any) {
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
        const { gallery } = this.props.project;

        this.setState({
            currentImage: (this.state.currentImage + gallery.length - 1) % gallery.length,
        })
    }

    moveNext() {
        const { gallery } = this.props.project;

        this.setState({
            currentImage: (this.state.currentImage + 1) % gallery.length,
        });
    }

    render() {
        const { project, tooltip } = this.props;
        const { currentImage, isOpen } = this.state;
        const { gallery, title, asset } = project;

        return (
            <div>
                <a href={asset} className="tilter" onClick={this.openLightbox.bind(this)} data-tip data-for={`${title}-tooltip`}>
                    <Poster project={project} />
                </a>
                <ReactTooltip id={`${title}-tooltip`} place="bottom" type="dark" effect="float">
                    <span>{tooltip}</span>
                </ReactTooltip>
                {isOpen && (
                    <Lightbox
                        mainSrc={gallery[currentImage].src}
                        nextSrc={gallery[(currentImage + 1) % gallery.length].src}
                        prevSrc={gallery[(currentImage + gallery.length - 1) % gallery.length].src}
                        imageCaption={gallery[currentImage].caption}
                        onCloseRequest={this.closeLightbox.bind(this)}
                        onMovePrevRequest={this.movePrevious.bind(this)}
                        onMoveNextRequest={this.moveNext.bind(this)}
                        animationOnKeyInput={true}
                    />
                )}
            </div>
        );
    }
}