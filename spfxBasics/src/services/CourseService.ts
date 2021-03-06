import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ICourse } from "../common/ICourse";
import  { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions} from "@microsoft/sp-http";


export class CourseService {

    constructor(private url: string, private context: WebPartContext) {
    }

    public addCourse(newItem: ICourse) : Promise<ICourse> {
        return this.context.spHttpClient.post(this.url,SPHttpClient.configurations.v1,{
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(newItem)
        }).then(resp=> {
            return resp.json();
        }).then(data => {
            return data as ICourse;
        });
    }

    // https:/.../_api/Lists/GetByTitle('Courses')/Items(10)
​
    public updateCourse(id: number, item: ICourse, etag: string) : Promise<boolean> {
    return this.context.spHttpClient.post(this.url + `(${id})`,SPHttpClient.configurations.v1,{
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "X-Http-Method" : "PATCH",
            "IF-Match" : etag
        },
        body: JSON.stringify(item)
    }).then(resp=> {
        return resp.ok;
    }).catch(err => {
        //console.log("Error updating Course");
        return false;
    });
    }
    ​
    public deleteCourse(id: number, etag: string) : Promise<boolean> {
    return this.context.spHttpClient.post(this.url + `(${id})`,SPHttpClient.configurations.v1,{
        headers: {
            "Accept" : "application/json",
            "X-Http-Method" : "DELETE",
            "IF-Match" : etag
        }
    }).then(resp=> {
        return resp.ok;
    }).catch(err => {
        console.log("Error deleting Course");
        return false;
    });
    }


     //Getting Data from Sharepoint with httpclient
    public getData(count: number=100, category? : string) : Promise<ICourse[]> {
        //url not needed in getdata parameter
        let url = this.url;
        url += "?$top=" + count;
    
        if(category) {
          url += `&$filter=Category eq '${ category }'`;
        }
    
        return this.context.spHttpClient.get(url,SPHttpClient.configurations.v1)
          //############## this is important and different then normal ##########//
        .then((resp: SPHttpClientResponse) =>{ // that is reasonthis extran then with json response require.
            return resp.json();
          }).then(data => {
              //console.log(JSON.stringify(data));
              return data.value as ICourse[];
          }).catch(err => {
            console.log("getData()-> Error in REST Call : "+err);
            return [];
          }); 
    }

    //Getting data with async await
    //URL not needed in parameter
    public async getData2() : Promise<ICourse[]> {
        try {
        let resp = await this.context.spHttpClient.get(this.url,SPHttpClient.configurations.v1);
    ​
        let data = await resp.json();
    ​
        let courses = data.value as ICourse[];
    ​
        return Promise.resolve(courses);
    ​
        } catch(err) {
        console.log(err);
        }
    ​
        return Promise.resolve([]);
    } 

    public getItemById(id: number) : Promise<ICourse> {
        let url = this.url;
        
        url +=  `?$filter=ID eq ${ id }`;
        return this.context.spHttpClient.get(url,SPHttpClient.configurations.v1)
          .then((resp : SPHttpClientResponse) => {
            return resp.json();
          }).then(data => {
              return data.value[0] as ICourse;
          }).catch(err => {
            console.log("getData()-> Error in REST Call : "+err);
            return null;
          }); 
    }

    public getCategories() : Promise<string[]> {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl 
          + "/_api/web/lists/GetByTitle('courses')/fields?$filter=EntityPropertyName eq 'Category'",
          SPHttpClient.configurations.v1
          ).then(resp=> {
            return resp.json();
          }).then(data => {
            //console.log(JSON.stringify(data));
    
            return data.value[0].Choices as string[];
          });
    }
    
}