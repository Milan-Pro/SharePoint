import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
​
import styles from './JqDemoWebPart.module.scss';
import * as strings from 'JqDemoWebPartStrings';
​
import * as $ from "jquery";
​
export interface IJqDemoWebPartProps {
  description: string;
}
​
interface IContact {
  name: string;
  phone: string;
  email: string;
}
​
export default class JqDemoWebPart extends BaseClientSideWebPart <IJqDemoWebPartProps> {
  private data : IContact[] = [];
​
  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.jqDemo }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">CONTACT INFO</span>
                <p class="${ styles.subTitle }">List of Contacts</p>
                <div id="newcontact">
                  <h2>New Contact</h2>
                  Name : <input type="text" id="name" /> <br/>
                  Phone: <input type="text" id="phone" /> <br/>
                  Email: <input type="text" id="email" /> <br/><br/>
​
                  <input type="button" value=" Add " id="btnadd" />
                </div>
                <div id="output">
                  No data
                </div>
            </div>
          </div>
        </div>
      </div>`;
​
      $("#btnadd",this.domElement).on('click', () => {
        let newContact : IContact = {
          name: $("#name",this.domElement).val().toString(),
          phone: $("#phone",this.domElement).val().toString(),
          email: $("#email",this.domElement).val().toString(),
        };
​
        this.data.push(newContact);

        //clear table input values after pushing add button.
        $("#name",this.domElement).val('');
        $("#phone",this.domElement).val('');
        $("#email",this.domElement).val('');

        $("#output", this.domElement).html(this.getHTMLTable(this.data));
      });
  }

  private getHTMLTable(items: IContact[]) : string {
    let html : string = `<table>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
              </tr>
    `;
  ​
    for(let c of items) {
      html += `<tr>
                  <td>${ c.name }</td>
                  <td>${ c.email }</td>
                  <td>${ c.phone }</td>
              </tr>`;
    }
  ​
    return html + "</table>";
  ​
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








