//this is grid demo without edit form just list view with sorting and searching.
import * as React from 'react';
import styles from './FluentUiDemo.module.scss';

import { Fabric, Label, TextField, DetailsList, DetailsListLayoutMode,
  IColumn, SelectionMode, Selection,  MarqueeSelection, Panel, PanelType } from "office-ui-fabric-react";

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
  original:  ICourse[];
  data: ICourse[];
  selectedData: ICourse[];
  columns: IColumn[];  
  currentItem: ICourse;
  showPane:boolean;
}


export default class GridDemoSimple extends React.Component<IGridDemoProps, IGridDemoState> {
    //storing selected data in private variable
    private selections : Selection;

  
    private handleColumnClick = (event, column: IColumn) => {
      
      const columns = this.state.columns.slice();
      const data = this.state.data.slice();
  
      const newColumns: IColumn[] = columns.slice();
      const currCol : IColumn = newColumns.filter(c => column.key === c.key)[0];
  
      newColumns.forEach((c: IColumn) => {
        if(c===currCol) {
          currCol.isSortedDescending = !currCol.isSortedDescending;
          currCol.isSorted = true;
        } else {
          c.isSorted = false;
          c.isSortedDescending = true;
        }
      });
  
      // Actual Sort
      const sortedItems = this.sortItems<ICourse>(data,currCol.fieldName,currCol.isSortedDescending);
  
      this.setState({
        data: sortedItems,
        columns: newColumns
      });
    }
    
  private columns : IColumn[] = [
    {
      key: "CourseID",
      name: "ID",
      fieldName: "CourseID",
      minWidth:50,
      maxWidth: 75,
      isResizable: false,
      onColumnClick: this.handleColumnClick
    },
    {
      key: "Title",
      name: "Course Name",
      fieldName: "Title",
      minWidth:200,
      maxWidth: 350,
      isResizable: true,
      onColumnClick: this.handleColumnClick
    },
    {
      key: "Category",
      name: "Category",
      fieldName: "Category",
      minWidth:200,
      maxWidth: 300,
      isResizable: true,
      onColumnClick: this.handleColumnClick
    },
    {
      key: "Duration",
      name: "Hours",
      fieldName: "Duration",
      minWidth:150,
      maxWidth: 200,
      isResizable: true,
      onColumnClick: this.handleColumnClick
    },
    {
      key: "Price",
      name: "Fees",
      fieldName: "Price",
      minWidth:150,
      maxWidth: 200,
      isResizable: true,
      onColumnClick: this.handleColumnClick
    }
  ];

  constructor(props: IGridDemoProps) {
    super(props);

    sp.setup({
      spfxContext:this.props.context
    });

    // Onselection change event will get data from private selections variable and set state here. this will allow rerender to show what is selected.
    this.selections = new Selection({
      onSelectionChanged: () => {
        let selCourses : ICourse[] = this.selections.getSelection() as ICourse[];

        this.setState({
          selectedData: selCourses,
          currentItem: selCourses[0],
          showPane: true
        });
      }
    });

    this.state = {
        original: [],
        data: [],
        selectedData: [],
        columns: this.columns,
        currentItem: null,
        showPane: false
    };

  }

  public componentDidMount() {
    sp.web.lists.getByTitle("Courses").items.get<ICourse[]>()
      .then(items => {
          this.setState({
            data: items,
            original: items
          });
      })
      .catch(err => { 
        console.log("Error fetching courses!" + err);
      });
  }  

  private sortItems<T>(items: T[], fieldName: string,sortDesc: boolean) : T[] {

    const key = fieldName as keyof T;//passing variable as key (advance tyescript )

    return items.slice(0).sort((a: T, b: T) => ((sortDesc ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));

  }

  public render(): React.ReactElement<IGridDemoProps> {
    return (
        <Fabric>
            <TextField label="Search :" onChange={ (e,value: string) => {
                this.setState({
                  data: value ? this.state.original
                    .filter(c => c.Title.toLowerCase().indexOf(value.toLowerCase())>-1 || 
                                 c.Category.toLowerCase().indexOf(value.toLowerCase())>-1 ) : this.state.original
                });
            }} /><br/>

            {/* MarqueeSelection will allow to draw and select multiple.*/}
            <MarqueeSelection selection={ this.selections }>
              <DetailsList 
                items={ this.state.data }
                isHeaderVisible={ true }
                layoutMode={ DetailsListLayoutMode.justified }
                selectionMode={ SelectionMode.multiple }
                columns={ this.state.columns }
                selection={ this.selections }
                compact={ true }
              />
            </MarqueeSelection>

            <Panel type={ PanelType.medium } isOpen={ this.state.showPane } onDismiss={ ()=> {
              this.setState({
                showPane: false
              });
            }}>
              <div> 
                <h2>Edit Course</h2>
                <div>
                  TBD: Show an Edit Form
                </div>
              </div>
            </Panel>
            
            <div>
            {/*Showing selected data */}
            <Label>Selected Courses : ({ this.selections.getSelectedCount() })</Label>
            {
                this.state.selectedData.map((c: ICourse) => <div>
                {c.CourseID } <br/>
                {c.Title }
                </div>)
            }
            </div>
        </Fabric>
    );
  }
}
