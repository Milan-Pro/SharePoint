import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'FluentUiDemoWebPartStrings';
import FluentUiDemo from './components/FluentUiDemo';
import { IFluentUiDemoProps } from './components/IFluentUiDemoProps';

import DatePickerDemo from './components/DatePickerDemo';
import PeoplePickerDemo from './components/PeoplePickerDemo';

import GridDemoSimple from './components/GridDemoWithoutEdit';

import GridDemo from "./components/GridDemo";

import stackDemo from './components/StackDemo';

import NavDemo from './components/NavDemo';

import NavBarDemo from './components/NavBarDemo';

import PivotDemo from './components/PivotDemo';

export interface IFluentUiDemoWebPartProps {
  description: string;
}

export default class FluentUiDemoWebPart extends BaseClientSideWebPart <IFluentUiDemoWebPartProps> {

  public render(): void {
    /* const element: React.ReactElement<IFluentUiDemoProps> = React.createElement(
      FluentUiDemo,
      {
        description: this.properties.description
      }
    );
    ReactDom.render(element, this.domElement); */
    
    //Date Picker
    /* const element2 = React.createElement(
      DatePickerDemo,
      {
        context: this.context
      }
    ); */

    //People picker's demo 
    /* const element = React.createElement(
      PeoplePickerDemo,
      {
        context: this.context
      }
    )
    ReactDom.render(element, this.domElement); */

    //Grid Demo without Edit form
    /* const element = React.createElement(
      GridDemoSimple,
      {
        context: this.context
      }
    ); 
    ReactDom.render(element, this.domElement);
    */

    //Grid demo with edit form in panel and dialogue
    /* const element = React.createElement(
      GridDemo,
      {
        context: this.context
      }
    ); 
    ReactDom.render(element, this.domElement);*/

    //StackDemo
    /* const element = React.createElement(
      stackDemo,
      {
        context:this.context
      }
    )
    ReactDom.render(element, this.domElement); */

    //NavDemo NavDemo command bars 
    /* const element = React.createElement(
      NavDemo,
      {
        context:this.context
      }
    )
    ReactDom.render(element, this.domElement); */

    //NavBar Demo
    /* const element = React.createElement(
      NavBarDemo,
      {
        context:this.context
      }
    )
    ReactDom.render(element, this.domElement); */

    //Pivot Control Demo Tabs like functionality
    const element = React.createElement(
      PivotDemo,
      {
        context:this.context
      }
    )
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
