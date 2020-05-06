import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './WeatherWpWebPart.module.scss';
import * as strings from 'WeatherWpWebPartStrings';

export interface IWeatherWpWebPartProps {
  description: string;
}

//This interface to pass ICity array data into weatherBox and then weather list.
export interface ICity{
  name:string,
  temp:number,
  humidity:number,
  climate:string
}

export default class WeatherWpWebPart extends BaseClientSideWebPart <IWeatherWpWebPartProps> {
  //This private class will represent raw information about cities.
  // ICity is an interface which is require in order to represent this cities as an array.

  private cities: ICity[] = [
    {
      name: "Lansing",
      temp:15.2,
      humidity: 80.4,
      climate:"Cloudy"
    },
    {
      name: "Detoit",
      temp:20.1,
      humidity:85.4,
      climate:"Sunny"
    },
    {
      name: "NewYork",
      temp:18.4,
      humidity:70.7,
      climate:"Cloudy"
    }
  ];

  // return is require otherwise it will throw an error
  //this is html block which will get data from above cities array and show the value in this html formate
  private WeatherBox(city: ICity): string {
    return `
     <div>
      <span class="${ styles.title }"> ${ city.name }</span>
      <span class="${ styles.title }"> ${ city.temp }</span>
      <span class="${ styles.title }"> ${ city.humidity }</span>
      <span class="${ styles.title }"> ${ city.climate }</span>
     </div>
    `
  }

  //weather list will represent the weather data in 
  /* Purpose of the weather list is to get data from cities array and bind with html template and 
  show it the html block for each item.
  */

  private weatherList(cities: ICity[]) : string{
    let html = "<div>";

     cities.forEach((item,index) => {

      html += this.WeatherBox(item);

     })

     return html + "</div>"
  }

  public render(): void {
    this.domElement.innerHTML = `
    <div class="${ styles.weatherWp }">
      <div class="${ styles.container }">
        <div class="${ styles.row }">
          <div class="${ styles.column }">
            <span class="${ styles.title }">Weather information Webpart</span>
            <span class="${ styles.description}">This webpart will show weather information based on city</span> 
            <div class="${ styles.description}">
              ${ this.weatherList(this.cities)}
            <div>
          </div>
        </div>
      </div>
    </div>`;
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
