import * as React from 'react';
import styles from './FluentUiDemo.module.scss';

import { Fabric, Label, TextField, DetailsList, DetailsListLayoutMode,
  IColumn } from "office-ui-fabric-react";


interface ICourse {
  CourseID: number;
  Title: string;
  Category: string;
  Duration: number;
}

interface IGridDemoProps {
  context: any;
}

interface IGridDemoState {
  data: ICourse[]
}

const courses : ICourse[] = [
  {
    CourseID: 1001,
    Title: 'C Programming',
    Category: 'Programming',
    Duration: 40
  },
  {
    CourseID: 1002,
    Title: 'R Programming',
    Category: 'Programming',
    Duration: 40
  },
  {
    CourseID: 1003,
    Title: 'Python Programming',
    Category: 'Programming',
    Duration: 40
  }
];

export default class GridDemo extends React.Component<IGridDemoProps, IGridDemoState> {
  constructor(props: IGridDemoProps) {
    super(props);

    this.state = {
      data: courses
    };

  }

  public render(): React.ReactElement<IGridDemoProps> {
    return (
        <Fabric>
              <DetailsList 
                items={ this.state.data}
                isHeaderVisible={ true }
                layoutMode={ DetailsListLayoutMode.justified }
              />
        </Fabric>
    );
  }
}
