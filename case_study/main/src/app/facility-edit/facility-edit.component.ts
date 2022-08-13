import { Component, OnInit } from '@angular/core';
import {RentType} from "../model/rent-type.model";
import {FacilityType} from "../model/facility-type.model";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rentTypeList: RentType[] = [
    new RentType(1,'Hour'),
    new RentType(2,'Day'),
    new RentType(3,'Month')
  ];

  facilityTypeList: FacilityType[] = [
    new FacilityType(1,'Villa'),
    new FacilityType(2,'House'),
    new FacilityType(3,'Room')
  ];

  roomStandardList: String[] = [
    ('Vip'),
    ('Luxury'),
    ('Normal'),
    ('Cheap')
  ];

}
