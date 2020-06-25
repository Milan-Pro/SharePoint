"use strict";
class LocalStorageDataProvider {
    constructor() {
        this.count = 0;
    }
    cacheItems(count) {
        throw new Error("Method not implemented.");
    }
    getAllItems() {
        throw new Error("Method not implemented.");
    }
    getItemById(id) {
        throw new Error("Method not implemented.");
    }
    addItem(item) {
        throw new Error("Method not implemented.");
    }
    updateItem(item) {
        throw new Error("Method not implemented.");
    }
    deleteItemById(id) {
        throw new Error("Method not implemented.");
    }
}
let prov = new LocalStorageDataProvider();
class AzureTableDataProvider {
    getAllItems() {
        throw new Error("Method not implemented.");
    }
    getItemById(id) {
        throw new Error("Method not implemented.");
    }
    addItem(item) {
        throw new Error("Method not implemented.");
    }
    updateItem(item) {
        throw new Error("Method not implemented.");
    }
    deleteItemById(id) {
        throw new Error("Method not implemented.");
    }
}
class SPListDataProvider {
    constructor(listName) {
        this.listName = listName;
    }
    getAllItems() {
        throw new Error("Method not implemented.");
    }
    getItemById(id) {
        throw new Error("Method not implemented.");
    }
    addItem(item) {
        throw new Error("Method not implemented.");
    }
    updateItem(item) {
        throw new Error("Method not implemented.");
    }
    deleteItemById(id) {
        throw new Error("Method not implemented.");
    }
}
