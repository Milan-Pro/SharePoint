import * as React from 'react';

import { Pivot, PivotItem, PivotLinkSize, PivotLinkFormat, Label  } from "office-ui-fabric-react";

export default class PivotDemo extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <Pivot linkSize={ PivotLinkSize.large } linkFormat={ PivotLinkFormat.tabs } onClick={(ev)=> {
                alert("You clicked a Tab");
            }}>
                <PivotItem headerText=" File ">
                    <Label>You Selected File</Label>
                </PivotItem>
                <PivotItem headerText=" Edit ">
                    <Label>You Selected Edit</Label>
                </PivotItem>
                <PivotItem headerText=" Products ">
                    <Label>You Selected Products</Label>
                </PivotItem>
                <PivotItem headerText=" Services ">
                    <Label>You Selected Services</Label>
                </PivotItem>
                <PivotItem headerText=" Settings ">
                    <Label>You Selected Settings</Label>
                </PivotItem>
            </Pivot>
        );
    }
}