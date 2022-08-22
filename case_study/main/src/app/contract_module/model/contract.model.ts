import {Customer} from "../../customer_module/model/customer.model";
import {Facility} from "../../facility_module/model/facility.model";

export class Contract {
  private id: number;
  private dayStart: string;
  private dayEnd: string;
  private deposit: number;
  private customer: Customer;
  private facility: Facility;


  constructor(id: number, dayStart: string, dayEnd: string, deposit: number, customer: Customer, facility: Facility) {
    this.id = id;
    this.dayStart = dayStart;
    this.dayEnd = dayEnd;
    this.deposit = deposit;
    this.customer = customer;
    this.facility = facility;
  }


  getid(): number {
    return this.id;
  }

  setid(value: number) {
    this.id = value;
  }

  getdayStart(): string {
    return this.dayStart;
  }

  setdayStart(value: string) {
    this.dayStart = value;
  }

  getdayEnd(): string {
    return this.dayEnd;
  }

  setdayEnd(value: string) {
    this.dayEnd = value;
  }

  getdeposit(): number {
    return this.deposit;
  }

  setdeposit(value: number) {
    this.deposit = value;
  }

  getcustomer(): Customer {
    return this.customer;
  }

  setcustomer(value: Customer) {
    this.customer = value;
  }

  getfacility(): Facility {
    return this.facility;
  }

  setfacility(value: Facility) {
    this.facility = value;
  }
}
