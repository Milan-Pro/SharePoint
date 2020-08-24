import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'PropPaneReactWebPartStrings';
import PropPaneReact from './components/PropPaneReact';
import { IPropPaneReactProps } from './components/IPropPaneReactProps';

import { PropertyPaneCourseFinder } from "../../controls/PropertyPaneCourseFinder";
import { ICourse } from "../../common/ICourse";

import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } 
  from "@pnp/spfx-property-controls/lib/PropertyFieldColorPicker";


import { PropertyFieldPeoplePicker, PrincipalType } 
  from '@pnp/spfx-property-controls/lib/PropertyFieldPeoplePicker';

import { IPropertyFieldGroupOrPerson } from 
  "@pnp/spfx-property-controls/lib/PropertyFieldPeoplePicker";

export interface IPropPaneReactWebPartProps {
  //course: ICourse;
  color: string;
  people: IPropertyFieldGroupOrPerson[]
}

export default class PropPaneReactWebPart extends BaseClientSideWebPart <IPropPaneReactWebPartProps> {

  public render(): void {
    /* const element: React.ReactElement<IPropPaneReactProps> = React.createElement(
      PropPaneReact,
      {
        course: this.properties.course
      }
    ); */

    const element: React.ReactElement<IPropPaneReactProps> = React.createElement(
      PropPaneReact,
      {
        color : this.properties.color,
        people: this.properties.people
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                /* new PropertyPaneCourseFinder('course',{
                  label: 'Pick Course:',
                  selectedCourse: this.properties.course,
                  wpContext: this.context,
                  onPropertyChanged: (propName: string, value: ICourse) => {
                     console.log("Selected Course : " + JSON.stringify(value));
                     
                     this.properties.course = value;
                     this.render();
                  }
                }), */
                PropertyFieldColorPicker('color',{
                  label: 'Color',
                  key: 'color1',
                  onPropertyChange: (propname: string, newValue: string) => {
                     this.properties.color = newValue;
                     this.render();
                  },
                  selectedColor: this.properties.color,
                  properties: this.properties,
                  //alphaSliderHidden: false,
                  //style: PropertyFieldColorPickerStyle.Full,
                  alphaSliderHidden: true,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation'
                }),
                PropertyFieldPeoplePicker('people', {
                  label: 'Pick User',
                  initialData: this.properties.people,
                  allowDuplicate: false,
                  principalType: [PrincipalType.Users, PrincipalType.SharePoint, PrincipalType.Security],
                  onPropertyChange: (propName: string, newValues: IPropertyFieldGroupOrPerson[])=> {
                    this.properties.people = newValues;
                    this.render();
                  },
                  context: this.context,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'peopleField1'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
