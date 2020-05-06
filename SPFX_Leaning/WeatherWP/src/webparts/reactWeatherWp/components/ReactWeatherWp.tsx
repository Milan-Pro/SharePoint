import * as React from 'react';
import styles from './ReactWeatherWp.module.scss';
import { IReactWeatherWpProps } from './IReactWeatherWpProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ReactWeatherWp extends React.Component<IReactWeatherWpProps, {}> {
  public render(): React.ReactElement<IReactWeatherWpProps> {
    return (
      <div className={ styles.reactWeatherWp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <div>

              </div>             
            </div>
          </div>
        </div>
      </div>
    );
  }
}
