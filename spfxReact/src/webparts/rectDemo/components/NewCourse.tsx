import * as React from "react";
import styles from './ReactDemo.module.scss';

export interface INewCourseProps {
    provider: any,
    onCancel() : void;
}

export class NewCourse extends React.Component<INewCourseProps, any> {
    constructor(p: INewCourseProps) {
        super(p);
    }

    render() : JSX.Element {
        return <div>
            <h2>Add Form</h2>
            <p>TBd - New Form Comes here</p>
            <input type="button" value=" Save " />&nbsp;
            <input type="button" value=" Cancel " onClick={ ()=> this.props.onCancel() } />
       </div>
    }
}