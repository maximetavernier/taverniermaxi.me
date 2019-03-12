/**
 * Created by Tatav on 01/04/2017.
 */
import React from 'react';

interface GroupTitleProps {
    groupTitle: string;
}

export default class Title extends React.Component<GroupTitleProps, any> {
    constructor(props: GroupTitleProps) {
        super(props);
    }

    render() {
        const { groupTitle } = this.props;

        return (
            <h3>{groupTitle}</h3>
        );
    }
}