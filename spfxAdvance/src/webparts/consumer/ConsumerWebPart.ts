import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

//This is responsible for consuming information from other werbpart in page
import { IDynamicDataSource } from "@microsoft/sp-dynamic-data";

import styles from './ConsumerWebPart.module.scss';
import * as strings from 'ConsumerWebPartStrings';

export interface IConsumerWebPartProps {
  description: string;
}

export default class ConsumerWebPart extends BaseClientSideWebPart<IConsumerWebPartProps> {
  private dataSources: IDynamicDataSource[] = [];

  private code : number = 0;
  private desc : string = "";
  private email : string = "";

  protected onInit() : Promise<void> {
    this.initDataSources();

    this.context.dynamicDataProvider.registerAvailableSourcesChanged(this.initDataSources);

    this.context.dynamicDataProvider.registerPropertyChanged(this.dataSources[0].id,'code',this.codeChanged);
    this.context.dynamicDataProvider.registerPropertyChanged(this.dataSources[0].id,'description',this.descChanged);
    this.context.dynamicDataProvider.registerPropertyChanged(this.dataSources[0].id,'email',this.emailChanged);

    return Promise.resolve();
  }

  private codeChanged() {
    let code = this.dataSources[0].getPropertyValue('code') as number;
    this.code = code;

    this.render();
  }

  private descChanged() {
    let desc = this.dataSources[0].getPropertyValue('description') as string;
    this.desc = desc;

    this.render();
  }

  private emailChanged() {
    let email = this.dataSources[0].getPropertyValue('email') as string;
    this.email = email;

    this.render();
  }

  private initDataSources() {
    let allSources = this.context.dynamicDataProvider.getAvailableSources();

    if(allSources && allSources.length > 0 ) {
      for(let i=0;i<allSources.length;i++) {
        let dataSrc = allSources[i];

        if(dataSrc.getPropertyDefinitions().filter(d=> d.id == 'code' || d.id == 'description' || d.id == 'email'  ).length > 0) {
          this.dataSources.push(dataSrc);
        }
      }
    }
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.consumer }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Consumer WebPart!</span>
              <p class="${ styles.subTitle }">Consumes data from Producer WebPart.</p>
              <p class="${ styles.description }">${this.code}</p>
              <p class="${ styles.description }">${escape(this.desc)}</p>
              <p class="${ styles.description }">${escape(this.email)}</p>
            </div>
          </div>
        </div>
      </div>`;
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
