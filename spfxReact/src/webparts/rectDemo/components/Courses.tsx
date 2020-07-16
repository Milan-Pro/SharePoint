import * as React from 'react';
import styles from './ReactDemo.module.scss';

import { CourseProvider } from "../../../services/CourseProvider";
import { ICourse } from "../../../common/ICourse";

import { NewCourse } from "./NewCourse";

export interface ICoursesProps {
  context: any;
}

interface ICoursesState {
  data: ICourse[];
  mode: FormMode;
}

enum FormMode {
  ViewAll,
  New,
  Edit
}

export default class Courses extends React.Component<ICoursesProps, ICoursesState> {
  private provider : CourseProvider;

  constructor(props: ICoursesProps) {
    super(props);

    // Create the State
    this.state = {
      data: [],
      mode: FormMode.ViewAll as FormMode
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
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Courses</span>
              <p className={ styles.subTitle }>List of Courses</p>
              {
                this.state.mode==FormMode.ViewAll && <input type="button" value="Add..." onClick={ () => {
                  this.setState({
                    mode: FormMode.New as FormMode
                  });
               }} />

              }

              { this.state.mode==FormMode.ViewAll && this.getCoursesTable() }

              {
                this.state.mode==FormMode.New && <NewCourse provider={ this.provider } onCancel={ () =>{
                  this.setState({
                    mode: FormMode.ViewAll as FormMode
                    });
                }} />
              }

            </div>
          </div>
        </div>
      </div>
    );
  }

  private getCoursesTable() {
    return <table>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Category</td>
              <td>Hrs</td>
              <td>Price</td>
            </tr>
            {
              this.state.data.map((c : ICourse) => this.getCourseRow(c))
            }
          </table>;
  }

  private getCourseRow(c: ICourse) {
    return <tr>
            <td>{ c.CourseID }</td>
            <td>{ c.Title }</td>
            <td>{ c.Category } </td>
            <td>{ c.Duration } Hrs</td>
            <td>$ { c.Price }</td>
          </tr>;
  }
}