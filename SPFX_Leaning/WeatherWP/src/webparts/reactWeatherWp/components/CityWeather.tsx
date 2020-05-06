import React ,{FunctionComponent} from 'react';

export default CityWeather : FunctionComponent<any> = (properties: any) => {
    return `
     <div>
      <span class="${ styles.title }"> ${ city.name }</span>
      <span class="${ styles.title }"> ${ city.temp }</span>
      <span class="${ styles.title }"> ${ city.humidity }</span>
      <span class="${ styles.title }"> ${ city.climate }</span>
     </div>
    `
}