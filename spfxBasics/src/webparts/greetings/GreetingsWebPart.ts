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
              <p class="${ styles.subTitle }">This is my first SPFx WebPart</p>
              <p class="${ styles.description }">${escape(this.properties.message)}</p>
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
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField('message', {
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