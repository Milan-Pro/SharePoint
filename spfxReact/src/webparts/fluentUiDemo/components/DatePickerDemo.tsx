import * as React from 'react';
import styles from './FluentUiDemo.module.scss';
import { IFluentUiDemoProps } from './IFluentUiDemoProps';

import { Fabric, Label, DatePicker, DayOfWeek, mergeStyleSets } from "office-ui-fabric-react";


interface IPickerDemoState {
    selDate: Date;
}

interface IPickerDemoProps {
    context?: any;
}

const datepickerStyle = mergeStyleSets({
    control:{
        maxWidth: '250px'
    }
});

//To add days in min date and max date
const addDays = (date: Date, d: number) : Date => {
    let newDate = new Date(date.getTime());

    newDate.setDate(newDate.getDate() + d);

    return newDate;
}

export default class DatePickerDemo extends React.Component<IPickerDemoProps, IPickerDemoState> {
    private minDate: Date;
    private maxDate: Date;

    constructor(props: IPickerDemoProps) {
        super(props);
        let d = new Date();
        //setting min days and max days
        this.minDate = addDays(d,-180);
        this.maxDate = addDays(d,180);

        console.log(`Min:${ this.minDate.toDateString() }, Max Date: ${ this.maxDate.toDateString() }`);

        this.state = {
            selDate: new Date()
        };
    }

    private formateDate(value: Date) : string {
        return value.getDate() + "/" + (value.getMonth() + 1) + "/" +
            value.getFullYear();
    }

    public render(): React.ReactElement<IFluentUiDemoProps> {
        return (
            <Fabric>
                <div>
                    <DatePicker label="Start Date: " 
                        firstDayOfWeek={ DayOfWeek.Monday} 
                        placeholder="Pick a Date" 
                        className={ datepickerStyle.control }
                        onSelectDate={ (value: Date) => {
                            this.setState({
                                selDate: value
                            });
                        }}
                        
                        formatDate={ this.formateDate }
                        minDate= { this.minDate }
                        maxDate={ this.maxDate }
                    />
                </div>
                <div>
                    <Label>DATA</Label>
                    <Label>Date: { this.state.selDate.toDateString() } </Label>
                </div>
            </Fabric>
        );
    }
}
