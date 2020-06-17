import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
​
import styles from './ProductsWebPart.module.scss';
import * as strings from 'ProductsWebPartStrings';
​
import { IProduct } from "../../common/IProduct";
import ProductService from "../../services/ProductService";
​
export interface IProductsWebPartProps {
  description: string;
}
​
const svcURL : string = "https://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json";
​
export default class ProductsWebPart extends BaseClientSideWebPart <IProductsWebPartProps> {
  private provider : ProductService;
​
  public onInit() : Promise<void> {
    this.provider = new ProductService(svcURL);
​
    return Promise.resolve();
  }
​
  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.products }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">PROUCTS!</span>
                <p class="${ styles.subTitle }">LIST OF PRODUCTS.</p>
                <div id="output">
                  Loading...
                </div>
            </div>
          </div>
        </div>
      </div>`;
​
      this.provider.getProducts().then((data: IProduct[]) => {
        this.domElement.querySelector("#output").innerHTML = this.getHTML(data);
​
      }).catch((err) => {
        this.domElement.querySelector("#output").innerHTML = `<span>Error loading data : ${ err }</span>`;
      });
  }
​

  private getHTML(items: IProduct[]) : string {
    let html : string = "";
    for(let p of items) {
      html += `<div class="${ styles.prodbox }">
                  ${ p.ProductID } <br/>
                  ${ p.ProductName } <br/>
                  ${ p.UnitPrice } <br/>
                  ${ p.UnitsInStock }
              </div>`;
    }
  return html;
  }

  
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