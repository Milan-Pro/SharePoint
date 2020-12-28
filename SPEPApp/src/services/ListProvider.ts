import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IOwners } from "../common/IOwners";
import { sp, IItemAddResult, IItemUpdateResult } from "@pnp/sp/presets/all";

export class SpepList{
    constructor(private listName : string, private context: WebPartContext) {
        sp.setup({
          spfxContext: this.context
        });
      }
    

      public addItem(newItem: IOwners) : Promise<IOwners> {
        return sp.web.lists.getByTitle(this.listName).items.add(newItem)
          .then((result: IItemAddResult) => {
            console.log("New Item : " + JSON.stringify(result.data));
  ​
            return result.data as IOwners;
          });
      }

      public getItems() : Promise<IOwners[]> {
        return sp.web.lists.getByTitle(this.listName).items
          .get<IOwners[]>();
      }

      public updateItem(id: number, item: IOwners, eTag: string) : Promise<boolean> {
        return sp.web.lists.getByTitle(this.listName).items.getById(id)
          .update(item, eTag)
            .then((result: IItemUpdateResult) => {
              return true;
            })
            .catch(err => {
              console.log("Updated Failed: " + err);
              return false;
            });
      }

      public deleteItem(id: number, eTag:string) : Promise<any> {
        return sp.web.lists.getByTitle(this.listName).items.getById(id)
          .delete(eTag);
      }

}