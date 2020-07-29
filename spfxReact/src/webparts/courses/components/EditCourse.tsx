import * as React from "react";
import styles from './Courses.module.scss';

import { ICourse } from "../../../common/ICourse";
import { CourseProvider } from "../../../services/CourseProvider";

import { ProviderContext } from "./ProviderContext";

export interface IEditCourseProps {
    onCancel() : void,
    onSaved() :void,
    categories: string[];
    id: number
}

export function EditCourse(props: IEditCourseProps) : JSX.Element {
    let provider = React.useContext<CourseProvider>(ProviderContext);

    let refs =  {
        CourseID: React.createRef<HTMLInputElement>(),
        Category: React.createRef<HTMLSelectElement>(),
        Title: React.createRef<HTMLInputElement>(),
        Description: React.createRef<HTMLTextAreaElement>(),
        Technology: React.createRef<HTMLInputElement>(),
        Duration: React.createRef<HTMLInputElement>(),
        Price: React.createRef<HTMLInputElement>()
    };

    let eTag: string  = "";

    // Fetch and populate form
    provider.getItemById(props.id).then((c: ICourse) => {
        refs.CourseID.current.value=c.CourseID.toString();
        refs.Title.current.value=c.Title;
        refs.Description.current.value=c.Description;
        refs.Technology.current.value=c.Technology;
        refs.Category.current.value=c.Category;
        refs.Duration.current.value=c.Duration.toString();
        refs.Price.current.value=c.Price.toString();
        eTag=c["odata.etag"];

    }).catch(err=> {
        alert("Unable to populat edit form!");
        props.onCancel();
        return;
    });


    return <div>
            <h2>Add Form</h2>
            Course ID : <input type="number" name="CourseID" ref={ refs.CourseID }/><br/>
            Name : <input type="text" name="Title" ref={ refs.Title } /><br/>
            Description : <br/><textarea name="Description" cols={30} rows={4} ref={ refs.Description } /><br/>
            Category : 
            <select name="Category" ref={ refs.Category }>
                {
                    props.categories.map((c: string) => <option value={ c }>{c}</option>)
                }
            </select><br/>
            Technology : <input type="text" name="Technology" ref={ refs.Technology } /><br/>          
            Duration : <input type="number" name="Duration" ref={ refs.Duration }/><br/>
            Price : <input type="number" name="Price" ref={ refs.Price } /><br/>

            <input type="button" value=" Save " onClick={ () => {
                // Validations come here

                if(confirm("Update this Course?")) {
                   provider.updateItem(props.id, {
                        CourseID: parseInt(refs.CourseID.current.value),
                        Title:refs.Title.current.value,
                        Description: refs.Description.current.value,
                        Category:refs.Category.current.value,
                        Technology: refs.Technology.current.value,
                        Duration: parseInt(refs.Duration.current.value),
                        Price:parseFloat(refs.Price.current.value)
                    } as ICourse, eTag).then(()=> {
                        alert("Item Updated!");
                        props.onSaved();
                    });
                }
            }} />&nbsp;
            <input type="button" value=" Cancel " onClick={ ()=> props.onCancel() } />
       </div>;
}