/**
 * Created by Tatav on 15/04/2017.
 */
import React from 'react';

import Techno from './techno';

export default class Poster extends React.Component {
    render() {
        const { project } = this.props;
        const { technosicon } = project;

        return(
            <figure className="tilter_figure">
                <img className="tilter_image" src={project.asset} alt={project.asset} />
                <div className="tilter_deco tilter_deco-shine"><div></div></div>
                <figcaption className="tilter_caption">
                    <h3 className="tilter_title">{project.title}</h3>
                    <p className="tilter_description">{project.descr}</p>
                    {technosicon.map((icon, key) =>
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