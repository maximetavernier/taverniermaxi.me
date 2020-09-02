/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

import GroupTitle from './Group/title';
import Techno from './Item/techno';

export default class TechnoGroup extends React.Component {

    render() {
        const { group } = this.props;

        return (
            <div className={"col-md-6 ".concat(group.key % 2 == 0 ? "col-sm-7" : "col-sm-5")}>
                <GroupTitle groupTitle={group.title} />
                {group.list.map((item, key) =>
                    <Techno key={key} techno={item} />
                )}
            </div>
        );
    }
}