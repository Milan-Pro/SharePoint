import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './CsomDemoWebPart.module.scss';
import * as strings from 'CsomDemoWebPartStrings';

require('sp-init');
require('microsoft-ajax');
require('sp-runtime');
require('sharepoint');

export interface ICsomDemoWebPartProps {
  description: string;
}

export default class CsomDemoWebPart extends BaseClientSideWebPart<ICsomDemoWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.csomDemo }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">CSOM Demo!</span>
              <p class="${ styles.subTitle }">Courses list items using JS CSOM.</p>
              <div id="output" class="${ styles.description }">Loading...</div>
            </div>
          </div>
        </div>
      </div>`;

      this.getCourses(this.context.pageContext.web.absoluteUrl);
  }

  private getCourses = (siteUrl : string) => {
    let html : string = "";

    const clientContext : SP.ClientContext = new SP.ClientContext(siteUrl);
    const query : SP.CamlQuery = new SP.CamlQuery();
    query.set_viewXml("<View />");   
    const courses : SP.ListItemCollection = clientContext.get_web()
                                                          .get_lists()
                                                          .getByTitle('Courses')
                                                          .getItems(query);
    clientContext.load(courses);

    clientContext.executeQueryAsync((sender,args)=>{
      // Success
      const courseEnum : IEnumerator<SP.ListItem<any>> = courses.getEnumerator();

      while(courseEnum.moveNext()) {
        let item : SP.ListItem<any> = courseEnum.get_current();

        html += `<div>
          ${ item.get_item('CourseID') } <br/>
          ${ item.get_item('Title') } <br/>
          ${ item.get_item('Category') } <br/>
          ${ item.get_item('Price') } <br/>
          ${ item.get_item('Technology') } <br/>
        </div>`;
      }

      this.domElement.querySelector("#output").innerHTML = `<div>${ html }</div>`;
    },
    (sender,args) =>{
      // Error
      console.log("Error fetching Courses :" + args.get_errorDetails());

      this.domElement.querySelector("#output")
        .innerHTML = `<div>Error: ${ args.get_errorDetails() }</div>`;
    });
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