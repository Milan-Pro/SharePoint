import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'CoursesWebPartStrings';
import Courses from './components/Courses';
import { ICoursesProps } from './components/ICoursesProps';

export interface ICoursesWebPartProps {
  listname: string;
  title: string;
}

export default class CoursesWebPart extends BaseClientSideWebPart <ICoursesWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICoursesProps> = React.createElement(
      Courses,
      {
        context: this.context,
        listName: this.properties.listname,
        title: this.properties.title
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
                PropertyPaneTextField('title', {
                  label: "Title"
                }),
                PropertyPaneTextField('listname', {
                  label: "List Name"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}