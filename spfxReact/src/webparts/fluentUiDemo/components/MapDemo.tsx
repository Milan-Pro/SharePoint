import * as React from 'react';
import styles from './FluentUiDemo.module.scss';

import { Label } from "office-ui-fabric-react";

import { Map, ICoordinates, MapType } from "@pnp/spfx-controls-react/lib/Map";

const location : ICoordinates = {
    latitude: 17.4155707,
    longitude: 78.475078
}


export default class MapDemo extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            center: {
                latitude: 0,
                longitude: 0
            }
        };
    }

    public render(): JSX.Element {
        return (
            <div>
                <Label>
                    Lat: { this.state.center.latitude }, Long: { this.state.center.longitude }
                </Label>
                <Map titleText="Our Location"
                    coordinates={ location }
                    mapType={ MapType.standard } 
                    enableSearch={ true }
                    onUpdateCoordinates={ (c: ICoordinates) => {
                        this.setState({
                            center: c
                        });
                    }}
                    zoom={ 9 } />
            </div>
        );
    }
}
