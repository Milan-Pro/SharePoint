import * as React from 'react';
import styles from './FluentUiDemo.module.scss';

import { Label, TextField, PrimaryButton, } from "office-ui-fabric-react";

export function TempConvert(props: any) : JSX.Element {
    let [celcius,setCelcius] = React.useState(0);
    let [faren, setFaren] = React.useState(0);

    return (
      
            <div>
              <span className={ styles.title }>Temp Converter!</span>
              <div>
                <TextField label="Celcius : " onChange={ (event, value) => {
                  setCelcius(parseFloat(value));
                }} /><br/>
                

                <PrimaryButton text=" Convert " onClick={ () => {
                    let f = ((9/5)* celcius) +32.0;

                    setFaren(f);

                }}/><br/><br/>

                <Label>Farenheit : { faren }</Label>
              </div>
              
            </div>

    );
}