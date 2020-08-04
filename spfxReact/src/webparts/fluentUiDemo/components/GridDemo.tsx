import * as React from 'react';
import styles from './FluentUiDemo.module.scss';

import { Fabric, Label, TextField, DetailsList, DetailsListLayoutMode,
  IColumn } from "office-ui-fabric-react";

import { sp } from "@pnp/sp/presets/all";


export interface ICourse {
  CourseID: number;
  Category: string;
  Title: string;
  Description?: string;
  Technology?: string;
  Duration: number;
  Price: number;
}

interface IGridDemoProps {
  context: any;
}

interface IGridDemoState {
  data: ICourse[]
}


const columns : IColumn[] = [
  {
    key: "CourseID",
    name: "ID",
    fieldName: "CourseID",
    minWidth:50,
    maxWidth: 75,
    isResizable: false
  },
  {
    key: "Title",
    name: "Course Name",
    fieldName: "Title",
    minWidth:200,
    maxWidth: 350,
    isResizable: true
  },
  {
    key: "Category",
    name: "Category",
    fieldName: "Category",
    minWidth:200,
    maxWidth: 300,
    isResizable: true
  },
  {
    key: "Duration",
    name: "Hours",
    fieldName: "Duration",
    minWidth:150,
    maxWidth: 200,
    isResizable: true
  },
  {
    key: "Price",
    name: "Fees",
    fieldName: "Price",
    minWidth:150,
    maxWidth: 200,
    isResizable: true
  }
];

export default class GridDemo extends React.Component<IGridDemoProps, IGridDemoState> {
  constructor(props: IGridDemoProps) {
    super(props);

    sp.setup({
      spfxContext:this.props.context
    });

    this.state = {
      data: []
    };

  }
  //getting list data through pnp and displaying in a grid.
  public componentDidMount() {
    sp.web.lists.getByTitle("Courses").items.get<ICourse[]>()
      .then(items => {
          this.setState({
            data: items
          });
      })
      .catch(err => { 
        console.log("Error fetching courses!" + err);
      });
  }

  public render(): React.ReactElement<IGridDemoProps> {
    return (
        <Fabric>
              <DetailsList 
                items={ this.state.data }
                isHeaderVisible={ true }
                layoutMode={ DetailsListLayoutMode.justified }
                columns={ columns }
              />
        </Fabric>
    );
  }
}
