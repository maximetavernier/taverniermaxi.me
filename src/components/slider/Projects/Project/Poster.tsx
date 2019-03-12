/**
 * Created by Tatav on 15/04/2017.
 */
import React from 'react';

import Techno from './Techno';
import ProjectModel from "@models/Section/Projects/ProjectModel";

interface PosterProps {
    project: ProjectModel;
}

export default class Poster extends React.Component<PosterProps, any> {
    constructor (props: PosterProps) {
        super(props);
    }

    render() {
        const { project } = this.props;
        const { technosicon, asset, title, descr } = project;

        return(
            <figure className="tilter_figure">
                <img className="tilter_image" src={asset} alt={asset} />
                <div className="tilter_deco tilter_deco-shine"><div></div></div>
                <figcaption className="tilter_caption">
                    <h3 className="tilter_title">{title}</h3>
                    <p className="tilter_description">{descr}</p>
                    {technosicon.map((icon: string, key: number) =>
                        <Techno key={key} icon={icon} />
                    )}
                </figcaption>
                <svg className="tilter_deco tilter_deco-lines" viewBox="0 0 300 415">
                    <path d="M20.5,20.5h260v375h-260V20.5z" />
                </svg>
            </figure>
        );
    }
}