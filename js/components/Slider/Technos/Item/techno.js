/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';
import ReactTooltip from 'react-tooltip';

import RatingGroup from './Rating/Group';
//import FactList from './Facts/FactList';

export default class Techno extends React.Component {
    render() {
        const { techno } = this.props;

        /*
         {techno.facts !== undefined && techno.facts.length > 0 ? <FactList facts={techno.facts} /> : <div />}
         */

        return (
            <div className="technoItem">
                <i className={`devicons devicons-${techno.icon}`} data-tip data-for={`${techno.name}-tooltip`}></i>
                <ReactTooltip id={`${techno.name}-tooltip`} place="bottom" type="dark" effect="float">
                    <p>{techno.name}</p>
                    <RatingGroup level={techno.level}/>
                </ReactTooltip>
            </div>
        );
    }
}