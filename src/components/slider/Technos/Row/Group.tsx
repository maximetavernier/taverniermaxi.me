/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

import GroupTitle from './Group/Title';
import GroupItem from './Group/Item';

import GroupModel from "@models/Section/Technos/GroupModel";
import GroupItemModel from "@models/Section/Technos/GroupItemModel";

interface TechnoGroupProps {
    key: number;
    group: GroupModel;
}

export default class TechnoGroup extends React.Component<TechnoGroupProps, any> {
    constructor(props: TechnoGroupProps) {
        super(props);
    }

    render() {
        const { group, key } = this.props;

        return (
            <div className={"col-md-6 ".concat(key % 2 == 0 ? "col-sm-7" : "col-sm-5")}>
                <GroupTitle groupTitle={group.title} />
                {group.list.map((item: GroupItemModel, key: number) =>
                    <GroupItem key={key} techno={item} />
                )}
            </div>
        );
    }
}