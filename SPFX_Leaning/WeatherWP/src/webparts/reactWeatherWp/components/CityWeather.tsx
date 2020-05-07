import React ,{FunctionComponent} from 'react';
import { ICity } from './ICity'
//This interface to pass ICity into ICityWeather.


// This is the propeties I am passing to my FunctionComponent
export interface ICityWeatherProps{
    city:ICity;
}

//
export const CityWeather : FunctionComponent<ICityWeatherProps> = (props: ICityWeatherProps) : any => {
    
     <div>
      <span className="${ styles.title }"> ${ this.props.city.name }</span>
      <span className="${ styles.title }"> ${ this.props.city.temp }</span>
      <span className="${ styles.title }"> ${ this.props.city.humidity }</span>
      <span className="${ styles.title }"> ${ this.props.city.climate }</span>
     </div>
    
}