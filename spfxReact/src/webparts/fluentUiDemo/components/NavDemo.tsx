import * as React from 'react';
import styles from './FluentUiDemo.module.scss';

import { CommandBar, ICommandBarItemProps, Fabric  } from "office-ui-fabric-react";

const moreItems : ICommandBarItemProps[] = [
    {
        key: 'convert',
        text: 'Convert',
        iconProps: {
            iconName: 'Convert'
        }
    },
    {
        key: 'print',
        text: 'Print',
        iconProps: {
            iconName: 'Print'
        }
    }
];


const cmdItems : ICommandBarItemProps[] = [
    {
        key: 'new',
        text: 'New',
        iconProps: {
            iconName: 'Add'
        },
        onclick: () => {
            alert("You clicked New..");
        }
    },
    {
        key: 'edit',
        text: 'Edit',
        iconProps: {
            iconName: 'Edit'
        },
        disabled: true
    },
    {
        key: 'download',
        text: 'Download',
        iconProps: { 
            iconName:'Download'
        }
    },
    {
        key: 'share',
        text: 'Share',
        iconProps: { 
            iconName:'Share'
        }
    },
    {
        key: 'settings',
        text: 'Settings',
        iconProps: { 
            iconName:'Settings'
        },
        subMenuProps:{
            items:[
                {
                    key: 'options',
                    text: 'Options...',
                    iconProps: { 
                        iconName:'Options'
                    }
                },
                {
                    key: 'about',
                    text: 'About',
                    iconProps: { 
                        iconName:'About'
                    }
                }
            ]
        }
    }
];

export default class NavDemo extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <Fabric>
                <CommandBar items={ cmdItems } overflowItems={ moreItems } />
            </Fabric>
        );
    }
}
