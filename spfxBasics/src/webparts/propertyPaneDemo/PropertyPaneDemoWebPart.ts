import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
  PropertyPaneDropdownOptionType,
  PropertyPaneToggle,
  PropertyPaneSlider
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
​
import styles from './PropertyPaneDemoWebPart.module.scss';
import * as strings from 'PropertyPaneDemoWebPartStrings';
​
export interface IPropertyPaneDemoWebPartProps {
  productid: number;
  productname: string;
  productdesc: string;
  category: string;
  discontinued: boolean;
  stocklevel: number;
  notes: string;
}
​
export default class PropertyPaneDemoWebPart extends BaseClientSideWebPart <IPropertyPaneDemoWebPartProps> {
​
  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.propertyPaneDemo }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Product Information!</span>
              <p class="${ styles.subTitle }">Product Details entered in Properties.</p>
              <p class="${ styles.description }">ID: ${ this.properties.productid }</p>
              <p class="${ styles.description }">Name: ${ this.properties.productname }</p>
              <p class="${ styles.description }">Desc: ${ this.properties.productdesc }</p>
              <p class="${ styles.description }">Category: ${ this.properties.category }</p>
              <p class="${ styles.description }">Discontiued?: ${ this.properties.discontinued }</p>
              <p class="${ styles.description }">Stock Level?: ${ this.properties.stocklevel }</p>
              <p class="${ styles.description }">Notes: ${ this.properties.notes }</p>
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
          description: "Product Info"
        },
        groups: [
          {
            groupName: "Basic Info",
            groupFields: [
              PropertyPaneTextField('productid', {
                label: "ID",
                onGetErrorMessage: (value: string) : string  => {
                  // 1001-9999 is valid -> check that!
                  let id : number = parseInt(value);
​
                  if(id && !isNaN(id)) {
                    if(id < 1001 || id > 9999)
                      return "Invalid ID (1001-9999)";
                  } else {
                    return "Not a number!";
                  }
​
                  return "";
                },
                deferredValidationTime: 800
              }),
              PropertyPaneTextField('productname',{
                label: 'Name',
                placeholder: 'Name of Product',
                onGetErrorMessage: (value: string) : string => {
                  if(value.trim()==="") {
                    return "Product name is required!";
                  }
​
                  return "";
                },
              
              }),
              PropertyPaneTextField('productdesc',{
                label: 'Desc',
                multiline: true,
                rows: 5
              }),
              PropertyPaneDropdown('category',{
                label: 'Category',
                options: [
                  { key : 'Bolts', text: 'Bolts'},
                  { key : 'Chains', text: 'Chains'},
                  { key : 'Nuts', text: 'Nuts'},
                  { key : 'Nails', text: 'Nails'},
                  { key : 'div1', text: '-', type: PropertyPaneDropdownOptionType.Divider },
                  { key : 'Abrasives', text: 'Abrasives'},
                  { key : 'Adhesives', text: 'Adhesives'},
                  { key : 'Solvents', text: 'Solvents'},
                  { key : 'div2', text: '-', type: PropertyPaneDropdownOptionType.Divider },
                  { key : 'Others', text: 'Others'}
                ]
              })
            ]
          },
          {
            groupName: 'Advanced Info',
            groupFields: [
              PropertyPaneSlider('stocklevel',{
                min: 10,
                max: 100,
                step: 10
              }),
              PropertyPaneToggle('discontinued',{
                label: 'Discontinued',
                onText: 'Yes',
                offText: 'No'
              })
            ]
          }
        ]
      },
      {
        header: {
          description: 'Product Notes'
        },
        groups: [
          {
            groupName: "Misc",
            groupFields: [
              PropertyPaneTextField('notes',{
                label: 'Notes',
                multiline: true,
                rows: 10
              })
            ]
          }
        ]
      }
    ]
  };
}
}
