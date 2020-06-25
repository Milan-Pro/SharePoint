
interface IDataProvider {
    getAllItems() :any[];
    getItemById(id: number) : any;
    addItem(item: any) : boolean;
    updateItem(item: any) : boolean;
    deleteItemById(id : number) : boolean;
}

interface IClientDataProvider extends IDataProvider {
    count : number;
    cacheItems(count: number) : void;
}

class LocalStorageDataProvider implements IClientDataProvider {
    cacheItems(count: number): void {
        throw new Error("Method not implemented.");
    }
    getAllItems(): any[] {
        throw new Error("Method not implemented.");
    }
    getItemById(id: number) {
        throw new Error("Method not implemented.");
    }
    addItem(item: any): boolean {
        throw new Error("Method not implemented.");
    }
    updateItem(item: any): boolean {
        throw new Error("Method not implemented.");
    }
    deleteItemById(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    count: number = 0;
}

let prov = new LocalStorageDataProvider();

class AzureTableDataProvider implements IDataProvider {
    getAllItems(): any[] {
        throw new Error("Method not implemented.");
    }
    getItemById(id: number) {
        throw new Error("Method not implemented.");
    }
    addItem(item: any): boolean {
        throw new Error("Method not implemented.");
    }
    updateItem(item: any): boolean {
        throw new Error("Method not implemented.");
    }
    deleteItemById(id: number): boolean {
        throw new Error("Method not implemented.");
    }

}

class SPListDataProvider implements IDataProvider {
    constructor(public listName : string) {

    }
    getAllItems(): any[] {
        throw new Error("Method not implemented.");
    }
    getItemById(id: number) {
        throw new Error("Method not implemented.");
    }
    addItem(item: any): boolean {
        throw new Error("Method not implemented.");
    }
    updateItem(item: any): boolean {
        throw new Error("Method not implemented.");
    }
    deleteItemById(id: number): boolean {
        throw new Error("Method not implemented.");
    }
}