import * as React from 'react';
import styles from '../../reactDemo/components/ReactDemo.module.scss';

import { CourseProvider } from "../../../services/CourseProvider";
import { ICourse } from "../../../common/ICourse";

import { ICoursesProps } from "./ICoursesProps";

export function AllCourses(props: ICoursesProps ) : JSX.Element {
  let [data,setData] = React.useState([]);
  let provider : CourseProvider = new CourseProvider(props.listName, props.context);
  let flag = false;
//React hooks useState and useEffect
  React.useEffect(() => {
    // LIKE ComponentDidMount
    provider.getItems()
      .then((courses: ICourse[]) => {
        setData(courses);
        flag=true;
      });

  },[flag]);

    return (
      <div className={ styles.reactDemo }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>{ props.title }</span>
              <p className={ styles.subTitle }>List of Courses</p>
              

              { getCoursesTable(data) }

            </div>
          </div>
        </div>
      </div>
    );
  }

 function getCoursesTable(courses :ICourse[]) {
    return <table>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Category</td>
              <td>Hrs</td>
              <td>Price</td>
              <td></td>
            </tr>
            {
              courses.map((c : ICourse) => <tr>
                    <td>{ c.CourseID }</td>
                    <td>{ c.Title }</td>
                    <td>{ c.Category } </td>
                    <td>{ c.Duration } Hrs</td>
                    <td>$ { c.Price }</td>
                </tr>)
            }
          </table>;
}
