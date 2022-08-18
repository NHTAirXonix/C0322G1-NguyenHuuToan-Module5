import { Injectable } from '@angular/core';
import {FacilityType} from "../../model/facility-type.model";

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor() { }

  facilityTypeList: FacilityType[] = [
    new FacilityType(1,'Villa'),
    new FacilityType(2,'House'),
    new FacilityType(3,'Room')
  ];

  getAll() {
    return this.facilityTypeList;
  }
}
