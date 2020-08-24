import * as React from "react";
import * as ReactDom from "react-dom";

import { IPropertyPaneField, IPropertyPaneCustomFieldProps, 
    PropertyPaneFieldType } from "@microsoft/sp-property-pane";

import { ICourse } from "../common/ICourse";

import { CourseFinder } from "./components/CourseFinder";


interface IPropertyPaneCourseFinderProps {
    label: string;
    selectedCourse: ICourse;
    wpContext: any;
    onPropertyChanged: (propName:string, newValue: any) => void;
}

interface IPropertyPaneCourseFinderInternalProps extends IPropertyPaneCourseFinderProps,
    IPropertyPaneCustomFieldProps {

}

export class PropertyPaneCourseFinder implements IPropertyPaneField<IPropertyPaneCourseFinderProps> {
    type: PropertyPaneFieldType = PropertyPaneFieldType.Custom;
    targetProperty: string;
    shouldFocus?: boolean;
    properties: IPropertyPaneCourseFinderInternalProps;
    elem: HTMLElement;

    constructor(targetProp: string, props: IPropertyPaneCourseFinderProps) {
        this.targetProperty = targetProp;
        this.shouldFocus = true;

        this.properties = {
            key: 'coursefinder_' + new Date().getTime(),
            label:props.label,
            selectedCourse: props.selectedCourse,
            wpContext: props.wpContext,
            onRender: this.onRender,
            onDispose:this.onDispose,
            onPropertyChanged: props.onPropertyChanged
        }
    }

    public onRender = (domElement:HTMLElement, context? : any) :void =>{
        this.elem = domElement;

        if(!this.elem) {
            console.log("PropertyPaneTaxRate.onRender()->Unable to find DOM Element");
            return;
        }

        const element: React.ReactElement<any> = React.createElement(
            CourseFinder,
            {
              label: this.properties.label,
              context: this.properties.wpContext,
              selectedCourse: this.properties.selectedCourse,
              onPropertyChanged: this.properties.onPropertyChanged
            }
          );
      
        ReactDom.render(element, this.elem);
    }

    public onDispose =  (domElement:HTMLElement, context? : any) :void =>{
        if(this.elem)
            ReactDom.unmountComponentAtNode(this.elem);
    }
}