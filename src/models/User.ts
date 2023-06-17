import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserDTO {
  id?:number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/user'
export class User {
   public event:Eventing = new Eventing();
   public sync:Sync<UserDTO> = new Sync<UserDTO>(rootUrl)
  constructor(private data: UserDTO) {}

  get(propName: string): number | string {
    return this.data[propName];
  }
  set(update: UserDTO): void {
    Object.assign(this.data, update);
  }

 
  
}
