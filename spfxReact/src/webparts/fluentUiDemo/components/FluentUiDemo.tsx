import * as React from 'react';
import styles from './FluentUiDemo.module.scss';
import { IFluentUiDemoProps } from './IFluentUiDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class FluentUiDemo extends React.Component<IFluentUiDemoProps, {}> {
  public render(): React.ReactElement<IFluentUiDemoProps> {
    return (
      <div className={ styles.fluentUiDemo }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Fluent UI Demo</span>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
