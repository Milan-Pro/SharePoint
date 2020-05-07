import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ReactWeatherWpWebPartStrings';
import ReactWeatherWp from './components/ReactWeatherWp';
import { IReactWeatherWpProps } from './components/IReactWeatherWpProps';

export interface IReactWeatherWpWebPartProps {
  description: string;
}

//This is parent frame Webpart which will call ReactWeatherWp element that 
//we have created in ReactWeatherWp.tsx file 
export default class ReactWeatherWpWebPart extends BaseClientSideWebPart <IReactWeatherWpWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactWeatherWpProps> = React.createElement(
      ReactWeatherWp,
      {
        description: this.properties.description
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
