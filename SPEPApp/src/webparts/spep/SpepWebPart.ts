import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SpepWebPart.module.scss';
import * as strings from 'SpepWebPartStrings';
import { HttpClient, IHttpClientOptions, HttpClientResponse } from '@microsoft/sp-http';

import { sp } from "@pnp/sp/presets/all";
import { IOwners } from "../../common/IOwners";
import { SpepList } from "../../services/ListProvider";

export interface ISpepWebPartProps {
  description: string;
  flowURL: string;
  FlowURLLabel: string;
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
                <span class="${styles.title} ms-Grid-col ms-u-sm12 block">
                   Item creation using SPFx & Flow
                </span>
                <div class="ms-Grid-col ms-u-sm12 block"><br/></div>
                <div class="ms-TextField ms-Grid-col ms-u-sm12 block">
                  <label class="ms-Label ms-Grid-col ms-u-sm4 block">Title</label>
                  <input id="spfxflowIm" class="ms-TextField-field ms-Grid-col ms-u-sm8 block" value="" type="text" placeholder="">
                  <label class="ms-Label ms-Grid-col ms-u-sm4 block">Description</label>
                  <input id="spfxfdesc" class="ms-TextField-field ms-Grid-col ms-u-sm8 block" value="" type="text" placeholder="">
                </div>
                <div class="ms-TextField ms-Grid-col ms-u-sm12 block"><br/></div>
                <div class="ms-TextField ms-Grid-col ms-u-sm6 block"></div>
                <div class="ms-TextField ms-Grid-col ms-u-sm6 block">
                <button class="${styles.button} create-Button" id="btnaddsave">
                <span class="${styles.label}">Create Item</span>
                </button></div>
                <div id="status"></div>              
                <p class="${ styles.description }" id="output">
                </p>
              </div>
            </div>
          </div>
        </div>`;
        this.setButtonsEventHandlers();
        
  
        this.provider.getItems()
          .then((Names : IOwners[]) =>{
            let html = "";  ​
            for(let c of Names) {
              html+= `<div class="${ styles.SpepTable }">
                        <span class="${ styles.SpepCell }">${ c.Title } </span>
                        <span class="${ styles.SpepCell }">${ c.Description }</span>
                      </div>`;            
              }  ​
            this.domElement.querySelector("#output").innerHTML = html;
          }).catch(err=> {
            this.domElement.querySelector("#output").innerHTML = `<div>
              Error getting Items: ${ err }
            </div>`;
          });
  }

  private setButtonsEventHandlers(): void {
    /* let item : IOwners = {
      Title: (<HTMLInputElement>document.getElementById("spfxflowIm")).value,
      Description: (<HTMLInputElement>document.getElementById("spfxfdesc")).value
    }; */
    const webPart: SpepWebPart = this;
    this.domElement.querySelector('button.create-Button').addEventListener('click', () => { webPart.createItem(); });
    //this.domElement.querySelector('button.create-Button').addEventListener('click', () => { this.provider.addItem(item); });
  }

  private createItem(): void {
        let result: HTMLElement = document.getElementById("status");
        let responseText: string = "";
        //result.style.color = "white";
        result.innerText = "Updating item...";
        let itemTitle : string = document.getElementById("spfxflowIm")["value"];
        let itemDesc: string =  document.getElementById("spfxfdesc")["value"];          
        const postURL = this.properties.flowURL;   
        const body: string = JSON.stringify({
          'Title': itemTitle,
          'Description' : itemDesc
        });   
        const requestHeaders: Headers = new Headers();       
        requestHeaders.append('Content-type', 'application/json');
        requestHeaders.append('Cache-Control', 'no-cache');   
        const httpClientOptions: IHttpClientOptions = {
          body: body,
          headers: requestHeaders
        };     
        this.context.httpClient.post(
          postURL,
          HttpClient.configurations.v1,
          httpClientOptions).then((response: HttpClientResponse) => {
            response.json().then((responseJSON: JSON) => {
              responseText = JSON.stringify(responseJSON);            
            result.innerText = (responseText=="201")?"Item updated successfully":"Error received while updating item";
          });
        }).catch ((response: any) => {
          let errMsg: string = `Error = ${response.message}`;
          result.style.color = "red";
          console.log(errMsg);
          result.innerText = errMsg;
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
              }),
              PropertyPaneTextField('flowURL', {
                label: strings.FlowURLLabel
              })
            ]
          }
        ]
      }
    ]
  };
}
}
