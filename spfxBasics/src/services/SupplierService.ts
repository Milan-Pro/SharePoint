import ax from "axios";
import { ISupplier } from "../common/ISupplier";
​
export default class SupplierService {
    constructor(private url: string){
​
    }
​
    public getProducts() : Promise<ISupplier[]> {
        return ax.get(this.url)
            .then(res => {
                    return res.data.value as ISupplier[];
            });
    }
​
    public getProductById(suppid: number) : Promise<ISupplier> {
        return ax.get(this.url + `&$filter=SupplierID eq ${ suppid }`)
            .then(res => {
                    return res.data.value[0] as ISupplier;
            });
    }
}