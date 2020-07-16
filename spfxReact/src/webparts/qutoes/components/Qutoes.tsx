import * as React from 'react';
import styles from './Qutoes.module.scss';
import { IQutoesProps } from './IQutoesProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Quotes extends React.Component<IQutoesProps, {}> {
  constructor(p: IQutoesProps) {
    super(p);
​
  }
​
  public componentDidMount() {
    console.log("Component did mount!");
  }
​
  //Depreacted
  public componentWillMount() {
    console.log("Component will mount!");
  }
​
  public componentDidUpdate() {
    console.log("Component did update!");
  }
​
  // Depreacted
  public componentWillUpdate() {
    console.log("Component will update!");
  }
​
  public componentWillUnmount() {
    console.log("Component will umount!");
  }
​
  // Deprecated
  public componentWillReceiveProps() {
    console.log("Component will receive props!");
  }
​
  public shouldComponentUpdate() {
    console.log("should component update!");
​
    return true;
  }
​
  
  
  public render(): React.ReactElement<IQutoesProps> {
    console.log("render fired!");
    
    return (
      <div className={ styles.qutoes }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>{ this.props.text }</span>
              <p className={ styles.subTitle }>-- {this.props.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}