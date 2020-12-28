import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './PnPDemoWebPart.module.scss';
import * as strings from 'PnPDemoWebPartStrings';

import { sp } from "@pnp/sp/presets/all"; //1st thing is initialize this

import { ICourse } from  '../../common/ICourse';
import { CourseProvider } from "../../services/CourseProvider";


export interface IPnPDemoWebPartProps {
  description: string;
}

export default class PnPDemoWebPart extends BaseClientSideWebPart <IPnPDemoWebPartProps> {
  private provider : ListProvider;
  ​
    protected onInit() : Promise<void> {
      this.provider = new ListProvider("Courses",this.context);
  ​
      return Promise.resolve();
    }  

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.pnPDemo }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>
                <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
                <div class="${ styles.description }" id="output"> 
                  Loading....
                </div>
            </div>
          </div>
        </div>
      </div>`;

      //pnp call to the list to get items this will retrun promise of any to better syntext we can use get<ICourse[]>()
      //sp.web.lists.getByTitle('Courses').items.get()
      //sp.web.lists.getByTitle('Courses').items.top(3).get<ICourse[]>()
      //sp.web.lists.getByTitle('Courses').items.filter("Category eq 'Web Development'").top(10).get<ICourse[]>()
      this.provider.getCategories().then(output => {
        console.log(JSON.stringify(output));
      });

      //Add Item example
      /* this.provider.addItem({
        CourseID: 9002,
        Category: "Programming Languages",
        Title: "Ruby Rails",
        Description: "Programming Development",
        Duration: 40,
        Price:99,
        Technology: "Web development"
      }).then(item => {
        console.log("Added item : "+ JSON.stringify(item));
        console.log(`Item Id: ${item['ID']} and ETag: ${item['odata.etag']}`);
      }).catch(err=>{
        console.log(`Error Handling: ${ err }`);
      }); */

      /* console.log("Updating item...");
      this.provider.updateItem(6,{
        CourseID: 2010,
        Title: 'Swift Programming for iOS',
        Description: 'Mobile App Dev with Swift',
        Category: 'Mobile Development',
        Technology: 'Swift',
        Duration:40,
        Price:200
      } as ICourse).then(flag => {
        if(flag) {
          console.log("Item Updated successfully!");
        } else{
          console.log("Item update failed!");
        }
      }).catch(err=>{
        console.log(`${err}`);
      }); */

      /* //test Delete
      this.provider.deleteItem(6)
        .then(_ => {
          console.log("Delete successful!");
        })
        .catch(err => {
          console.log("Delete failed - " + err);
        }); */
​      
      // Add Items
      console.log("Starting Batch Ops...");
​
      this.testBatchOps();
​
      this.provider.getCategories().then(output => {
        console.log(JSON.stringify(output));
      });

      this.provider.getItems()
        .then((courses: ICourse[]) =>{
          let html = "";
​
          for(let c of courses) {
            html+= `<div class="${ styles.course }">
                      ${ c.Title } <br/>
                      ${ c.Category } <br/>
                      ${ c.CourseID} <br/>
                      ${ c.CourseID } hrs</br>
                      ${ c.Price }
                    </div>`;
          }
​
          this.domElement.querySelector("#output").innerHTML = html;
        }).catch(err=> {
          this.domElement.querySelector("#output").innerHTML = `<div>
            Error getting Items: ${ err }
          </div>`;
        });

  }

  private testBatchOps() {
    let batch = sp.createBatch();
​
    sp.web.lists.getByTitle('Courses').items.getById(1).inBatch(batch).delete()
    .then(_=>{
      console.log("Batch: Delete Success!");
    });
​
    sp.web.lists.getByTitle('Courses').items.getById(6).inBatch(batch).update({
      CourseID: 8002,
      Title: 'Entity Framework',
      Description: 'Entity Framework with SQL Server',
      Category: 'Web Development',
      Duration: 40,
      Price: 99.25,
      Technology: 'Databases'
    } as ICourse).then((result) =>{
      console.log("Batch: Update success!");
    });
​
    sp.web.lists.getByTitle('Courses').items.inBatch(batch).add({
      CourseID: 8005,
      Title: 'Infragistics for Angular',
      Description: 'Infragistics for Angular',
      Category: 'Web Development',
      Duration: 40,
      Price: 199.00,
    }).then((result) => {
      console.log("Batch: Add Success!");
    });
​
    batch.execute().then(_ => {
      console.log("Batch Operations completed!");
    });
​
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
