import { Injectable } from '@angular/core';
import {RentType} from "../model/rent-type.model";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor() { }

  rentTypeList: RentType[] = [
    new RentType(1,'Hour'),
    new RentType(2,'Day'),
    new RentType(3,'Month')
  ];

  getAll() {
    return this.rentTypeList;
  }
}
