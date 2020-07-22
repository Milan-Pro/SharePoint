import * as React from 'react';

import { IProduct } from "./IProduct";

interface IProductProps {
    item: IProduct
}

interface IProductState {
    data: IProduct;
}

export class Product extends React.Component<IProductProps, IProductState> {
    constructor(props: IProductProps) {
        super(props);

        this.state = {
            data: props.item
        };   
    }

    public render() : JSX.Element {
        return <div>
            { this.state.data.id } <br/>
            { this.state.data.name }  <br/>
            { this.state.data.cat } <br/>
            { this.state.data.price } &nbsp;

            <input type="button" onClick={ () => {
                let item = this.state.data;
                item.price += 10;

                this.setState({
                    data: item
                });
            }} value=" + " />
        </div>;
    }
}