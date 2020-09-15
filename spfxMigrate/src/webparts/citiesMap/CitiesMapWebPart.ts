import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './CitiesMapWebPart.module.scss';
import * as strings from 'CitiesMapWebPartStrings';

import getWeather from './weather.js';

export interface ICitiesMapWebPartProps {
  description: string;
}

export default class CitiesMapWebPart extends BaseClientSideWebPart<ICitiesMapWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.citiesMap }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Weather WebPart</span>
              <p class="${ styles.subTitle }">Shows a Weather from migrated Script Editor code</p>
              <div id="output">Loading...</div>
            </div>
          </div>
        </div>
      </div>`;

      getWeather(this.domElement.querySelector("#output"));
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
