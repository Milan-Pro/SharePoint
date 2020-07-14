import * as React from 'react';
import styles from './ReactDemo.module.scss';

import { CourseProvider } from "../../../services/CourseProvider";
import { ICourse } from "../../../common/ICourse";

import Course from "./Course";

export interface ICoursesProps {
  context: any;
}

interface ICoursesState {
  data: ICourse[];
}

export default class Courses extends React.Component<ICoursesProps, ICoursesState> {
  private provider : CourseProvider;

  constructor(props: ICoursesProps) {
    super(props);

    // Create the State
    this.state = {
      data: []
    };

    this.provider = new CourseProvider("Courses", props.context);

  }

  public componentDidMount() {
    this.provider.getItems()
      .then((items: ICourse[]) => {
        this.setState({
          data: items
        });
      })
      .catch(err => {
        console.log("Error fetching data: " +err);
        alert("Error fetching data: " + err);
      });
  }

  public render(): JSX.Element {
    return (
      <div className={ styles.reactDemo }>
        <div className={ styles.container }>
        <span className={ styles.title }>Courses</span>
        <p className={ styles.subTitle }>List of Courses</p>
          <div className={ styles.row }>
            {
              this.state.data.map((c : ICourse) => <Course item={ c } />)
            }
          </div>
        </div>
      </div>
    );
  }
}