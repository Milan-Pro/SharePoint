import * as React from 'react';
import styles from './FluentUiDemo.module.scss';
import { IFluentUiDemoProps } from './IFluentUiDemoProps';

import { Fabric, Label, TextField, PrimaryButton, DefaultButton,Checkbox, IDropdownStyles, Toggle } from "office-ui-fabric-react";
import { Dropdown, IDropdownOption, DropdownMenuItemType } from "office-ui-fabric-react";
import { ChoiceGroup, IChoiceGroupOption } from "office-ui-fabric-react";

import { transitionKeysAreEqual } from 'office-ui-fabric-react/lib/utilities/keytips/IKeytipTransitionKey';

import { TempConvert } from './TempConvert';

const options : IDropdownOption[] = [
  { key: "head1", text: "Indians", itemType: DropdownMenuItemType.Header },
  { key: "1", text: 'Indian' },
  { key: "2", text: 'NRI' },
  { key: "div1", text: '-', itemType: DropdownMenuItemType.Divider },
  { key: "6", text: 'OPC' },
  { key: "head2", text: "Regional", itemType: DropdownMenuItemType.Header },
  { key: "3", text: 'Nepalese' },
  { key: "4", text: 'Sri Lankan' },
  { key: "head3", text: "Others", itemType: DropdownMenuItemType.Header },
  { key: "5", text: 'Foreigner' }
];

const schemeoptions : IChoiceGroupOption[] = [
  { key: "1", text: "Ordinary"},
  { key: "2", text: "Special"},
  { key: "3", text: "VIP"}
];

const ddStyles : Partial<IDropdownStyles> = {
  dropdown: {
    width: 250
  }
};

interface IFluentUiDemoState {
  name: string;
  email: string;
  discount: boolean;
  status: string;
  items: IDropdownOption[];
  scheme: IChoiceGroupOption;
}

export default class FluentUiDemo extends React.Component<IFluentUiDemoProps,any> {
  constructor(props: IFluentUiDemoProps) {
    super(props);

    this.state = {
      name: "",
      email: "",
      discount: transitionKeysAreEqual,
      status: "",
      items:[]
    };

  }

  public render(): React.ReactElement<IFluentUiDemoProps> {
    return (
      <Fabric>
              <div>
                <Label>Customer Info</Label>
                <TextField label="Name: " onChange={ (event, value) => {
                  this.setState({
                    name: value
                  });
                }} />
                
                <TextField label="Email: "  onChange={ (event, value) => {
                  this.setState({
                    email: value
                  });
                }}/><br/>

                <Dropdown label="Citizen Status: " 
                  placeholder="Citizenship Status" 
                  styles={ ddStyles }
                  options={ options } 
                  multiSelect={ true }
                  onChange={ (event,item: IDropdownOption) => {
                    
                    this.setState({
                      items: item.selected ? [...this.state.items,item] : 
                        this.state.items.filter((i : IDropdownOption) => i.key != item.key)
                    });
                    
                  }} /><br/>

                <ChoiceGroup options={ schemeoptions } label="Scheme:" required 
                    onChange={ (event,item: IChoiceGroupOption) => {
                      this.setState({
                        scheme: item
                      });
                    }} /><br/>

                <Checkbox label="Discount" checked={ this.state.discount } onChange={ (ev, chkd) => {
                  this.setState({
                    discount: chkd
                  });
                }} /><br/><br/>

                <Toggle label="Discount" checked={ this.state.discount } onChange={ (ev, chkd) => {
                  this.setState({
                    discount: chkd
                  });
                }} onText="Yes" offText="No"/><br/><br/>

                <PrimaryButton text=" Save " />&nbsp;&nbsp;
                <DefaultButton text=" Cancel " />
              </div>
              <div>
                <Label>Form Values</Label>
                <Label>
                  Name: { this.state.name } <br/>
                  Email: { this.state.email } <br/>
                  Discount: { this.state.discount ? "Yes" : "No" } <br/>
                  Status: { this.state.status } <br/>
                  <div>
                    Citizenship: 
                    {
                      this.state.items.map((i : IDropdownOption) => <div>{ i.text }</div>)
                    }
                  </div>
                  Scheme: {
                    this.state.scheme && <div>{ this.state.scheme.text } </div>
                  }
                </Label>
              </div>
              <div>
                <TempConvert/>
              </div>
          </Fabric>
    );
  }
}
