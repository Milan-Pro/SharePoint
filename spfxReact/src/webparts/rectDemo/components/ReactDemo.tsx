import * as React from 'react';
import styles from './ReactDemo.module.scss';
import { IReactDemoProps } from './IReactDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { Products } from './Products';

export default class ReactDemo extends React.Component<IReactDemoProps, {}> {
  public render(): React.ReactElement<IReactDemoProps> {
    return (
      <div className={ styles.reactDemo }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>React Demo!</span>
              <p className={ styles.subTitle }>Demo of React Components</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <Products />
            </div>
          </div>
        </div>
      </div>
    );
  }
}