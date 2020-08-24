import * as React from 'react';
import styles from './PropPaneReact.module.scss';
import { IPropPaneReactProps } from './IPropPaneReactProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { Label } from "office-ui-fabric-react";

export default class PropPaneReact extends React.Component<IPropPaneReactProps, {}> {
  public render(): React.ReactElement<IPropPaneReactProps> {
    return (
      <div className={ styles.propPaneReact }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
            <span className={ styles.title }>Course Finder Demo!</span>
              <p className={ styles.subTitle }>Displays the Selected Course.</p>
              {/* <p className={ styles.description }>
                {
                  this.props.course && <div>
                    Course ID: { this.props.course.CourseID } <br/>
                    Name: { this.props.course.Title } <br/>
                    Category: { this.props.course.Category } <br/>
                    Duration: { this.props.course.Duration } <br/>
                    Price: { this.props.course.Price } <br/>
                  </div>
                }
              </p> */}
              <p className={ styles.subTitle }>Displays the Selected Color.</p>
              <p className={ styles.description }>
                Selected Color: { this.props.color }
              </p>
              <span className={ styles.description }>
                Selected Color: { this.props.color }
                Selected Users: 
                {
                  this.props.people && this.props.people.map(p => <Label>
                    { p.fullName } - { p.email }
                  </Label>) 
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
