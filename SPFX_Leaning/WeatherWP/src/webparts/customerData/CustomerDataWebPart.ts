import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'CustomerDataWebPartStrings';
import CustomerData from './components/CustomerData';
import { ICustomerDataProps } from './components/ICustomerDataProps';

export interface ICustomerDataWebPartProps {
  description: string;
  listName: string;
}

export default class CustomerDataWebPart extends BaseClientSideWebPart <ICustomerDataWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICustomerDataProps> = React.createElement(
      CustomerData,
      {
        description: this.properties.description,
        listName: "Customers", /*error comes due to missing interface in icustmerDta interface component*/
        context: this.context
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
