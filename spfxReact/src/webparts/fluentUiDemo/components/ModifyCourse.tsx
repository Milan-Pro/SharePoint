import * as React from "react";

import { ICourse } from "../../../common/ICourse";
import { CourseProvider } from "../../../services/CourseProvider";

import { Fabric, Label, TextField, Dropdown,IDropdownOption, 
    DefaultButton,PrimaryButton,ITextField,IDropdownProps,Dialog, DialogType,DialogFooter } from "office-ui-fabric-react";

export interface IModifyCourseProps {
    onCancel? : ()=>void,
    onSaved? : ()=>void,
    categories: string[];
    id: number;
    provider: CourseProvider;
}

export function ModifyCourse(props: IModifyCourseProps) : JSX.Element {
    let [options, setOptions] = React.useState<IDropdownOption[]>();
    let [flag,setFlag] = React.useState<boolean>(false);
    let [hideDlg,setHideDlg] = React.useState<boolean>(true);
    let [item,setItem] = React.useState<ICourse>({
        CourseID: 0,
        Title: "",
        Category: "",
        Duration: 0,
        Price: 0,
        Description: ""
    } as ICourse);

    let refs =  {
        CourseID: React.createRef<ITextField>(),
        Category: React.createRef<IDropdownProps>(),
        Title: React.createRef<ITextField>(),
        Description: React.createRef<ITextField>(),
        Technology: React.createRef<ITextField>(),
        Duration: React.createRef<ITextField>(),
        Price: React.createRef<ITextField>()
    };

    let eTag: string  = "";

    React.useEffect(() => {
        // CreateDropdown Options
        let opt :IDropdownOption[] = props.categories.map((p:string) =>{
            return {
                key: p,
                text:p
            }
        });
        
        setOptions(opt);
        setFlag(true);

        // Fetch and populate form
        props.provider.getItemById(props.id).then((c: ICourse) => {
            setItem(c);

            /*refs.CourseID.current.value=c.CourseID.toString();
            refs.Title.current.value=c.Title;
            refs.Description.current.value=c.Description;
            refs.Technology.current.value=c.Technology;
            refs.Category.current.selectedKey=c.Category;
            refs.Duration.current.value=c.Duration.toString();
            refs.Price.current.value=c.Price.toString();
            eTag=c["odata.etag"];*/

        }).catch(err=> {
            alert("Unable to populat edit form!");
            console.log(err);
            props.onCancel();
            return;
        });

    },[flag]);


    return <Fabric>
            
            <TextField label="Course ID: " componentRef={ refs.CourseID } value={ item.CourseID.toString() } /><br/>
            <TextField label="Course Name: " componentRef={ refs.Title } value={ item.Title }/><br/>
            <TextField label="Description: " componentRef={ refs.Description } multiline rows={ 5 } resizable 
                value={ item.Description }/><br/>
           
            <Dropdown options={ options } label="Category: " multiSelect={ false } selectedKey={ item.Category }>
                {
                    props.categories.map((c: string) => <option value={ c }>{c}</option>)
                }
            </Dropdown><br/>

            <TextField label="Technology: " componentRef={ refs.Technology } value={ item.Technology } /><br/>          
            <TextField label="Duration: " componentRef={ refs.Duration } value={ item.Duration.toString() } /><br/>
            <TextField label="Price: " componentRef={ refs.Price } value={ item.Price.toString() } /><br/>

            <PrimaryButton text=" Save " onClick={ () => setHideDlg(false) } />&nbsp;
            <DefaultButton text=" Cancel " onClick={ ()=> props.onCancel() } />
           

            <Dialog type={ DialogType.largeHeader } hidden={ hideDlg } dialogContentProps={{
                type: DialogType.normal,
                title: "Update Course",
                closeButtonAriaLabel:'Close',
                subText: "Do you want to save the Changes to this Course?"
            }}>
                <DialogFooter>
                    <PrimaryButton text="Yes" onClick={ () => {
                        props.provider.updateItem(props.id, {
                                CourseID: parseInt(refs.CourseID.current.value),
                                Title:refs.Title.current.value,
                                Description: refs.Description.current.value,
                                Category:refs.Category.current.selectedKey,
                                Technology: refs.Technology.current.value,
                                Duration: parseInt(refs.Duration.current.value),
                                Price:parseFloat(refs.Price.current.value)
                            } as ICourse, eTag).then(()=> {
                                props.onSaved();
                            });
                        }
                    } />&nbsp;
                    <DefaultButton text=" Cancel " onClick={ ()=>  {
                        setHideDlg(true);
                        props.onCancel();
                    }} />
                </DialogFooter>
            </Dialog>
       </Fabric>;
}