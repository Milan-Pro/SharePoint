import * as React from 'react';
import styles from './FluentUiDemo.module.scss';

import { Label } from "office-ui-fabric-react";

import { TaxonomyPicker, IPickerTerms  } from "@pnp/spfx-controls-react/lib/TaxonomyPicker";

const initVal : IPickerTerms = [
    {
      "name": "Cloud",
      "key": "9d1add90-dff1-4224-bc66-7a922ad3cc43",
      "path": "Cloud",
      "termSet": "a2c9d33f-a41e-48e2-8fb2-a77c5e789d38"
    },
    {
      "name": "DevOps",
      "key": "6271e51b-911a-4ff5-8b18-377f977831ed",
      "path": "DevOps",
      "termSet": "a2c9d33f-a41e-48e2-8fb2-a77c5e789d38"
    }];

export default class TaxonomyDemo extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            selectedTerms: []
        }
    }

    public render(): JSX.Element {
        return (
            <div>
                <TaxonomyPicker context={ this.props.context } 
                    initialValues={ initVal }
                    label="Pick a Term:"
                    panelTitle="Select Term"
                    termsetNameOrID="Categories"
                    isTermSetSelectable={ false }
                    allowMultipleSelections={ true }
                    placeholder="Select Category"
                    onChange={ (terms: IPickerTerms) => {
                        let selTerms: string[] = [];

                        console.log("Terms: " + JSON.stringify(terms));

                        for(let t of terms) {
                            selTerms.push(t.name);
                        }

                        this.setState({
                            selectedTerms: selTerms
                        });
                    }}
                />
                <Label>Selected Term Names : </Label><br/>
                {
                    this.state.selectedTerms.map(t => <Label>{ t }</Label>)
                }
            </div>
        );
    }
}