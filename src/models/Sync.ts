import axios, { AxiosResponse,AxiosPromise } from "axios";
import { UserDTO } from "./User"; 

interface HasId{
     id? : number;
}

export class Sync<T extends HasId>{
    constructor(public rootUrl:string){}
    fetch(id:number):AxiosPromise{
       return  axios.get(`${this.rootUrl}/${id}`)
      }
      save(data:T):AxiosPromise{
        const {id} = data;
       if (id) {
        return axios.put(`${this.rootUrl}/${id}`,data)
       }else{
       return axios.post(this.rootUrl,data)
       }
      }
}