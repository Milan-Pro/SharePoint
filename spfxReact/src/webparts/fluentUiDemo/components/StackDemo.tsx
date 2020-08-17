import * as React from 'react';
import styles from './FluentUiDemo.module.scss';

import { TextField, Stack, IStackTokens, IStackItemStyles, Fabric, IStackStyles  } from "office-ui-fabric-react";

const stackStyles : IStackStyles = {
    root: {
        backgroundColor: "lightgreen",
        padding: 10
    }
};

const itemStyles : IStackItemStyles = {
    root: {
        padding: 5,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "lightgray"
    }
};

const tokens : IStackTokens = {
    childrenGap: 20
};

const control : IStackItemStyles = {
    root: {
        display: 'flex',
        backgroundColor: "lightgreen"
    }
}


export default class StackDemo extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <Fabric>
                <Stack styles={ stackStyles } tokens={ tokens }>
                    <Stack.Item styles={ itemStyles }>
                        <Stack  horizontal styles={{
                            root: {
                                padding: 5
                            }
                        }} tokens={{ 
                            childrenGap: 10
                        } as IStackTokens}>
                            <Stack.Item styles={ control } grow={ 1 }>
                                <TextField label="Name:" />
                            </Stack.Item>
                            <Stack.Item  styles={ control } grow={ 1 }>
                                <TextField label="Email:" />
                            </Stack.Item>
                            <Stack.Item  styles={ control } grow={ 1 }>
                                <TextField label="Phone:" />
                            </Stack.Item>
                        </Stack>
                    </Stack.Item>
                    <Stack.Item styles={ itemStyles }>
                        <div> Row 2</div>
                    </Stack.Item>
                    <Stack.Item styles={ itemStyles }>
                        <div> Row 3</div>
                    </Stack.Item>
                </Stack>
            </Fabric>
        );
    }
}
