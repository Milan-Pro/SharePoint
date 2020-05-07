import * as React from 'react';
import styles from './ReactWeatherWp.module.scss';
import { IReactWeatherWpProps } from './IReactWeatherWpProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { CityWeather } from './CityWeather';
import { ICity } from './ICity';

const cities: ICity[] = [
  {
    name: "Ahmedabad",
    temp: 25.2,
    humidity: 80.4,
    climate:"Cloudy"
  },
  {
    name: "Vadodara",
    temp:23.1,
    humidity:85.4,
    climate:"Sunny"
  },
  {
    name: "Surat",
    temp: 21.4,
    humidity:70.7,
    climate:"Cloudy"
  }
];

export default class ReactWeatherWp extends React.Component<IReactWeatherWpProps, {}> {
  public render(): React.ReactElement<IReactWeatherWpProps> {
    return (
      <div className={ styles.reactWeatherWp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to Weather WP!</span>
              <p className={ styles.subTitle }>Cuurent Weather in City</p>
              <div>
                <div> Waether for Cities</div>
                <br/>
                    {/*map function call every element in the array and iterate through
                     every item and get html template from Cityweather.TS */}
                    { cities.map ((item) =><CityWeather city = { item } /> ) }
              </div>             
            </div>
          </div>
        </div>
      </div>
    );
  }
}
