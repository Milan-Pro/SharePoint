import * as React from 'react';
import styles from './ReactDemo.module.scss';

import { ICourse } from "../../../common/ICourse";

export interface ICoursesProps {
  item: ICourse;
}


export default function Courses(props:ICoursesProps): JSX.Element {
  
    return  <div className={ styles.column }>
              { props.item.CourseID } : { props.item.Title } <br/>
              { props.item.Category } <br />
              { props.item.Description } <br/>
              { props.item.Technology } <br/>
              { props.item.Duration } Hrs <br/>
              { props.item.Duration } $ 
            </div>;
}