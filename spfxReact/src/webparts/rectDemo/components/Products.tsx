import * as React from 'react';

import { Product } from "./Product";
import { IProduct } from "./IProduct";

const products : IProduct[] = [
      {
        id: 1001,
        name: "Nose Plier",
        cat:"Tools",
        price:345.34
      },
      {
        id: 1002,
        name: "Cutting Plier",
        cat:"Tools",
        price:300.00
      },
      {
        id: 1003,
        name: "Hammer",
        cat:"Tools",
        price:150.00
      },
      {
        id: 1004,
        name: "Drill",
        cat:"Tools",
        price:900.00
      },
      {
        id: 1005,
        name: "Hacksaw",
        cat:"Tools",
        price:95.00
      }
];

export class Products extends React.Component<any,any> {
    constructor(props: any) {
        super(props);

        this.state = {
            data: products
        };
    }

    public render() : JSX.Element {
        return <div>
                <input type="button" value=" Del " onClick={ () =>{
                    let newData = [...this.state.data];
                    newData.shift();

                    this.setState({
                        data: newData
                    });
                }} />
                
                {
                    this.state.data.map((p : IProduct) => <Product item={ p } />)
                }
        </div>;
    }
}