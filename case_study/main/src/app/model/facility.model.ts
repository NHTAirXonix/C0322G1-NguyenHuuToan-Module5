import {RentType} from "./rent-type.model";
import {FacilityType} from "./facility-type.model";

export class Facility {
  private id: number;
  private name: string;
  private area: number;
  private cost: number;
  private people: number;
  private standard: string;
  private decription: string;
  private poolArea: number;
  private floor: number;
  private facilityFree: string;
  private urlImg: string;
  private status: boolean;
  private rentType: RentType;
  private facilityType: FacilityType;


  constructor(id: number, name: string, area: number, cost: number, people: number, standard: string, decription: string, poolArea: number, floor: number, facilityFree: string, urlImg: string, status: boolean, rentType: RentType, facilityType: FacilityType) {
    this.id = id;
    this.name = name;
    this.area = area;
    this.cost = cost;
    this.people = people;
    this.standard = standard;
    this.decription = decription;
    this.poolArea = poolArea;
    this.floor = floor;
    this.facilityFree = facilityFree;
    this.urlImg = urlImg;
    this.status = status;
    this.rentType = rentType;
    this.facilityType = facilityType;
  }

  getid(): number {
    return this.id;
  }

  setid(value: number) {
    this.id = value;
  }

  getname(): string {
    return this.name;
  }

  setname(value: string) {
    this.name = value;
  }

  getarea(): number {
    return this.area;
  }

  setarea(value: number) {
    this.area = value;
  }

  getcost(): number {
    return this.cost;
  }

  setcost(value: number) {
    this.cost = value;
  }

  getpeople(): number {
    return this.people;
  }

  setpeople(value: number) {
    this.people = value;
  }

  getstandard(): string {
    return this.standard;
  }

  setstandard(value: string) {
    this.standard = value;
  }

  getdecription(): string {
    return this.decription;
  }

  setdecription(value: string) {
    this.decription = value;
  }

  getpoolArea(): number {
    return this.poolArea;
  }

  setpoolArea(value: number) {
    this.poolArea = value;
  }

  getfloor(): number {
    return this.floor;
  }

  setfloor(value: number) {
    this.floor = value;
  }

  getfacilityFree(): string {
    return this.facilityFree;
  }

  setfacilityFree(value: string) {
    this.facilityFree = value;
  }

  geturlImg(): string {
    return this.urlImg;
  }

  seturlImg(value: string) {
    this.urlImg = value;
  }

  getstatus(): boolean {
    return this.status;
  }

  setstatus(value: boolean) {
    this.status = value;
  }

  getrenttype(): RentType {
    return this.rentType;
  }

  setrenttype(value: RentType) {
    this.rentType = value;
  }

  getfacilitytype(): FacilityType {
    return this.facilityType;
  }

  setfacilitytype(value: FacilityType) {
    this.facilityType = value;
  }
}
