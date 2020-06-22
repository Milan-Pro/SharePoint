import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SuppliersWebPart.module.scss';
import * as strings from 'SuppliersWebPartStrings';

import { ISupplier } from '../../common/ISupplier';
import SupplierService from '../../services/SupplierService';

export interface ISuppliersWebPartProps {
  description: string;
}

const svcURL : string = "https://services.odata.org/V3/Northwind/Northwind.svc/Suppliers?$format=json";

export default class SuppliersWebPart extends BaseClientSideWebPart <ISuppliersWebPartProps> {
  private supplier : SupplierService;


  public onInit() : Promise<void> {
    this.supplier = new SupplierService(svcURL);
​
    return Promise.resolve();
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.suppliers }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Suppliers!</span>
                <p class="${ styles.subTitle }">LIST OF SUPPLIERS.</p>
                <div id="output">
                  Loading...
                </div>
            </div>
          </div>
        </div>
      </div>`;

      // load the data inside HTML that we got from onit promise in supplier 
      this.supplier.getProducts().then((data: ISupplier[]) => {
        this.domElement.querySelector("#output").innerHTML = this.getHTML(data);​
      }).catch((err) => {
        this.domElement.querySelector("#output").innerHTML = `<span>Error loading data : ${ err }</span>`;
      }); 
  }

  private getHTML(items: ISupplier[]) : string {
    let html : string = `<table class="${ styles.suppbox }">
                          <tr>
                            <th>Supplier ID</th>
                            <th>CompanyName</th>
                            <th>ContactName</th>
                            <th>ContactTitle</th>
                          </tr>`;
    for(let s of items) {
      html += `
                <tr>
                  <td>${ s.SupplierID }</td>
                  <td>${ s.ContactName } </td>
                  <td>${ s.ContactTitle }</td>
                  <td>${ s.Phone }</td>
                </tr>
              `;
    }
    html += '</table>';
  return html;
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
