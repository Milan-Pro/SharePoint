//https://www.odata.org/odata-services/
//https://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json
//Node https - https://nodejs.org/dist/latest-v12.x/docs/api/https.html#https_https_get_url_options_callback
//npm install @types/node

export interface IProduct {
    ProductID: number;
    ProductName: string;
    SupplierID: number;
    CategoryID: number;
    QuantityPerUnit: string;
    UnitPrice: number;
    UnitsInStock: number;
    UnitsOnOrder: number;
    ReorderLevel: number;
    Discontinued: boolean;
}