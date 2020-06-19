import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './GreetingsWebPart.module.scss';
import * as strings from 'GreetingsWebPartStrings';

export interface IGreetingWebPartProps {
  message: string;
  name: string;
  address: string;
}
​
export default class GreetingWebPart extends BaseClientSideWebPart <IGreetingWebPartProps> {
​
  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.greetings }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Greeting WebPart</span>
              <p class="${ styles.subTitle }">Greetings to all learners.</p>
              <p class="${ styles.description }">${ this.properties.message }</p>
              <p class="${ styles.description }">${ this.properties.name }</p>
              <p class="${ styles.description }">${ this.properties.address }</p>
            </div>
          </div>
        </div>
      </div>`;
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
            groupName: "Basic Info",
            groupFields: [
              PropertyPaneTextField('message', {
                label: "Message"
              }),
              PropertyPaneTextField('name',{
                label: "Name",
                resizable: true
              }),
              PropertyPaneTextField('address',{
                label: "Address",
                resizable: true,
                multiline: true,
                rows: 4
              })
            ]
          }
        ]
      }
    ]
  };
}
}