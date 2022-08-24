import {CustomerTypeI} from "./customer-type-i";

export interface CustomerI {
  id?:number;
  birthday?:string;
  customerTypeI?:CustomerTypeI;
  name?:string;
  birthDay?:string;
  gender?:number;
  idNumber?:string;
  phone?:string;
  email?:string;
  address?:string;
  status?:boolean;
}
