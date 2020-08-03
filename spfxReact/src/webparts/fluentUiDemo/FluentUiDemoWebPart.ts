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


    const element = React.createElement(
      PeoplePickerDemo,
      {
        context: this.context
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
