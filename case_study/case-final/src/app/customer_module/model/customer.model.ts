import {CustomerType} from './customer-type.model';

export class Customer {
  public id: number;
  public type: CustomerType;
  public name: string;
  public birthday: string;
  public gender: string;
  public idNumber: number;
  public phone: string;
  public email: string;
  public address: string;
  public status: boolean;

  constructor(id: number, type: CustomerType, name: string, birthday: string, gender: string, idNumber: number, phone: string, email: string, address: string, status: boolean) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.birthday = birthday;
    this.gender = gender;
    this.idNumber = idNumber;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.status = status;
  }


  getid(): number {
    return this.id;
  }

  setid(value: number) {
    this.id = value;
  }

  gettype(): CustomerType {
    return this.type;
  }

  settype(value: CustomerType) {
    this.type = value;
  }

  getname(): string {
    return this.name;
  }

  setname(value: string) {
    this.name = value;
  }

  getbirthday(): string {
    return this.birthday;
  }

  setbirthday(value: string) {
    this.birthday = value;
  }

  getgender(): string {
    return this.gender;
  }

  setgender(value: string) {
    this.gender = value;
  }

  getidNumber(): number {
    return this.idNumber;
  }

  setidNumber(value: number) {
    this.idNumber = value;
  }

  getphone(): string {
    return this.phone;
  }

  setphone(value: string) {
    this.phone = value;
  }

  getemail(): string {
    return this.email;
  }

  setemail(value: string) {
    this.email = value;
  }

  getaddress(): string {
    return this.address;
  }

  setaddress(value: string) {
    this.address = value;
  }

  getstatus(): boolean {
    return this.status;
  }

  setstatus(value: boolean) {
    this.status = value;
  }
}
