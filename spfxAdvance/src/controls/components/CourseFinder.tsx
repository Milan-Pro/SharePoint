import * as React from "react";

import { Label, TextField, PrimaryButton, ITextField, MessageBar, MessageBarType } from 'office-ui-fabric-react';

import { sp } from "@pnp/sp/presets/all";

import { ICourse } from "../../common/ICourse";

export class CourseFinder extends React.Component<any,any> {
    private idRef = React.createRef<ITextField>();

    constructor(props: any) {
        super(props);

        sp.setup({
            spfxContext: props.context
        });

        this.state = {
            selectedCourse: props.selectedCourse,
            errorMsg: "",
            showError: false
        };
    }

    public render() : JSX.Element {
        return <div>
            {
                this.state.showError && <MessageBar messageBarType={ MessageBarType.error } onDismiss={ ()=> {
                    this.setState({
                        showError: false
                    });
                }} >
                    { this.state.errorMsg }
                </MessageBar>
            }
            <TextField label={ this.props.label } componentRef={ this.idRef } />&nbsp;
            <PrimaryButton text=" Find "  onClick={ this.findCourse } /><br/>
            {
                this.state.selectedCourse!=null && <Label>{ this.state.selectedCourse.Title }</Label>
            }

        </div>;
    }

    private findCourse = () => {
        let courseID : number = parseInt(this.idRef.current.value);

        sp.web.lists.getByTitle('Courses').items.filter(`CourseID eq ${ courseID }`).get()
            .then((c: ICourse[]) => {
                this.setState({
                    selectedCourse: c[0] as ICourse
                });

                // Notify the parent control
                this.props.onPropertyChanged(this.props.propName,c[0]);
            })
            .catch(err => {
                this.setState({
                    errorMsg: "Invalid Course ID : " + courseID,
                    showError: true
                });
            });
    }
}