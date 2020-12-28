import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SpepWebPart.module.scss';
import * as strings from 'SpepWebPartStrings';

import { sp } from "@pnp/sp/presets/all";
import { IOwners } from "../../common/IOwners";
import { SpepList } from "../../services/ListProvider";

export interface ISpepWebPartProps {
  description: string;
}

export default class SpepWebPart extends BaseClientSideWebPart <ISpepWebPartProps> {
  private provider : SpepList; 
  protected onInit() : Promise<void> {
    this.provider = new SpepList("SPEP",this.context);
​
    return Promise.resolve();
  }  
  
  public render(): void {
    this.domElement.innerHTML = `
        <div class="${ styles.spep }">
          <div class="${ styles.container }">
            <div class="${ styles.row }">
              <div class="${ styles.column }">
                <span class="${ styles.title }">SPEP List</span>
                <p class="${ styles.subTitle }">SPFx with elevated permission.</p>
                <p class="${ styles.description }" id="output">
                </p>                
              </div>
            </div>
          </div>
        </div>`;

        
  
        this.provider.getItems()
          .then((Names : IOwners[]) =>{
            let html = "";  ​
            for(let c of Names) {
              html+= `<div class="${ styles.SpepNames }">
                        ${ c.Title } <br/>
                        ${ c.Description }
                      </div>`;            
              }  ​
            this.domElement.querySelector("#output").innerHTML = html;
          }).catch(err=> {
            this.domElement.querySelector("#output").innerHTML = `<div>
              Error getting Items: ${ err }
            </div>`;
          });
  }


  protected get dataVersion(): Version {
  return Version.parse('1.0.0');
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
