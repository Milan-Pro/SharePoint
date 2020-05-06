declare interface IWeatherWpWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'WeatherWpWebPartStrings' {
  const strings: IWeatherWpWebPartStrings;
  export = strings;
}
