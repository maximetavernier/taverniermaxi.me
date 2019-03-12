/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';
import RowGroup from './Row/Group';
import GroupModel from "@models/Section/Technos/GroupModel";

interface GroupRowProps {
    key: number;
    groups: GroupModel[]
}

export default class Row extends React.Component<GroupRowProps> {
    render() {
        const { groups } = this.props;

        return (
            <div className="row">
                {groups.map((group: GroupModel, key: number) =>
                    <RowGroup key={key} group={group} />
                )}
            </div>
        );
    }
}