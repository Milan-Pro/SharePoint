import React ,{FunctionComponent} from 'react';
import { ICity } from './ICity'
//This interface to pass ICity into ICityWeather.


// This is the propeties I am passing to my FunctionComponent
export interface ICityWeatherProps{
    city:ICity;
}

//
export const CityWeather : FunctionComponent<ICityWeatherProps> = (props: ICityWeatherProps) : React.ReactElement => 
  
     <div>
      <span className="${ styles.title }"> { props.city.name }</span>
      <span className="${ styles.title }"> { props.city.temp }</span>
      <span className="${ styles.title }"> { props.city.humidity }</span>
      <span className="${ styles.title }"> { props.city.climate }</span>
     </div>
    
//since this is functional component it doesn't need this.props other wise it need this.props