import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
​
import * as strings from 'QutoesWebPartStrings';
import Quotes from './components/Qutoes';
import { IQutoesProps } from './components/IQutoesProps';
​
export interface IQuotesWebPartProps {
  quotetext: string;
  author: string;
}
​
export default class QuotesWebPart extends BaseClientSideWebPart <IQuotesWebPartProps> {
​
  public render(): void {
    
    const comp: React.ReactElement<IQutoesProps> = React.createElement(
      Quotes,
      {
        text: this.properties.quotetext,
        name: this.properties.author
      }
    );
​
    ReactDom.render(comp, this.domElement);
  }
​
  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }
​
  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
​
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
                PropertyPaneTextField('quotetext', {
                  label: 'Quotation',
                  resizable: true,
                  multiline: true
                }),
                PropertyPaneTextField('author', {
                  label: 'Author'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}



