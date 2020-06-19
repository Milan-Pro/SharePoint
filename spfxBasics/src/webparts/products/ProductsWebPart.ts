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
import * as $ from "jquery";
import 'datatables.net';
​
//import { SPComponentLoader } from "@microsoft/sp-loader";


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
    $(this.domElement).html(`
      <div class="${ styles.products }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">PROUCTS!</span>
                <p class="${ styles.subTitle }">LIST OF PRODUCTS.</p>
                <table id="output" width="100%" class="table table-bordered" id="dataTable">
                </table>
            </div>
          </div>
        </div>
      </div>`);
​
      // Load the DataTable CSS
    //SPComponentLoader.loadCss("https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css");
​
    this.provider.getProducts().then((products: IProduct[]) => {
      $("#output",this.domElement).DataTable({
          data: products,
          columns:[
            {title : 'ID'},
            {title : 'Name'},
            {title : 'Price'},
            {title : 'Stock'},
          ],
          columnDefs: [{
            "defaultContent": "-",
            "targets": "_all"
        }]
      });
    ​
      //$("#output", this.domElement).html(this.getHTMLTable(data));
    }).catch((err) => {
      $("#output", this.domElement).html(`<span>Error loading data : ${ err }</span>`);
    });
}

​

  private getHTMLTable(items: IProduct[]) : string {
    let html : string = `<table>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
              </tr>
    `;
  ​
    for(let p of items) {
      html += `<tr>
                  <td>${ p.ProductID }</td>
                  <td>${ p.ProductName }</td>
                  <td>${ p.UnitPrice }</td>
                  <td>${ p.UnitsInStock }</td>
              </tr>`;
    }
  ​
    return html + "</table>";
  ​
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