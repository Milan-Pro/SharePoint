import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './ProducerWebPart.module.scss';
import * as strings from 'ProducerWebPartStrings';

//This is responsible for producing information for other werbpart to use in page.
import { IDynamicDataCallables, IDynamicDataPropertyDefinition } from "@microsoft/sp-dynamic-data";

export interface IProducerWebPartProps {
  code: number;
  description: string;
}

export default class ProducerWebPart extends BaseClientSideWebPart<IProducerWebPartProps> 
  implements IDynamicDataCallables  {
  private email : string = "";

  protected onInit() : Promise<void> {
    this.context.dynamicDataSourceManager.initializeSource(this);

    return Promise.resolve();
  }

  public getPropertyDefinitions(): IDynamicDataPropertyDefinition[] {
    return [
      { id: 'code', title: 'Code' },
      { id: 'description', title:'Description'},
      { id: 'email', title: 'Email' }
    ];
  }

  public getPropertyValue(propertyId: string) : string | number {
    switch(propertyId) {
      case 'code' :
          return this.properties.code;
      case 'description':
          return this.properties.description;
      case 'email':
          return this.email;
    }

    throw new Error('Invalid property id : ' + propertyId);
  }

  public onPropertyPaneFieldChanged(propPath: string, oldValue: any, newValue: any) {
    console.log(`Producer->Property Changed : ${ propPath } , newValue: ${ newValue }`);

    if(this.context.dynamicDataSourceManager) {
      this.context.dynamicDataSourceManager.notifyPropertyChanged(propPath);
    }
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.producer }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Producer Webpart!</span>
              <p class="${ styles.subTitle }">Shares the properties via Dynamic Data API.</p>
              <p class="${ styles.description }">Code: ${this.properties.code}</p>
              <p class="${ styles.description }">Desc: ${escape(this.properties.description)}</p>
              Email: <input type="text"  id="email" value="${ this.email }" />&nbsp;
              <input type="button" value=" Send " id="btnsend" />
            </div>
          </div>
        </div>
      </div>`;

      this.domElement.querySelector<HTMLInputElement>("#btnsend").onclick = () => {
        let email : string = this.domElement.querySelector<HTMLInputElement>("#email").value;
        this.email = email;

        this.context.dynamicDataSourceManager.notifyPropertyChanged("email");
      }
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
                PropertyPaneTextField('code', {
                  label: "Code"
                }),
                PropertyPaneTextField('description', {
                  label: "Description"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
