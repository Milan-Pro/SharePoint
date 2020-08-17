import * as React from 'react';

import { Nav, INavLink, INavLinkGroup,INavStyles, Fabric  } from "office-ui-fabric-react";

const styles : Partial<INavStyles> = {
    root: {
        width:225,
        height: 450,
        boxSizing:'border-box',
        border: '1px solid gray',
        overflow: 'auto'
    }
};

const links : INavLinkGroup[] = [
    {
        links: [
            {
                name: 'Home',
                url: '#',
                links: [
                    {
                        name: 'Products',
                        url: '#',
                        key: 'key1',
                        target: '_blank'
                    },
                    {
                        name: 'Customers',
                        url: '#',
                        key: 'key2',
                        target: '_blank'
                    }
                ],
                isExpanded: true
            },
            {
                name: 'Documents',
                url:'#',
                key:'key3',
                isExpanded:true,
                target:'_blank'
            },
            {
                name: 'Reports',
                url:'#',
                key:'key4',
                isExpanded:true,
                target:'_blank'
            },
            {
                name: 'Settings',
                url:'#',
                links: [
                    {
                        name: 'General',
                        url: '#',
                        key: 'key5',
                        target: '_blank'
                    },
                    {
                        name: 'About',
                        url: '#',
                        key: 'key6',
                        target: '_blank'
                    }
                ],
                isExpanded: true
            }           
        ]
    }
];

export default class NavBarDemo extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <Nav styles={ styles } groups={ links }
                onLinkClick={ (ev, item: INavLink) =>{
                    ev.preventDefault();

                    if(item) {
                        alert("You clicked: " + item.name);
                    }
                }} />
        );
    }
}
