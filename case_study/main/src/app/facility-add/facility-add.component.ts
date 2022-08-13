import { Component, OnInit } from '@angular/core';
import {Facility} from "../model/facility.model";
import {RentType} from "../model/rent-type.model";
import {FacilityType} from "../model/facility-type.model";

@Component({
  selector: 'app-facility-add',
  templateUrl: './facility-add.component.html',
  styleUrls: ['./facility-add.component.css']
})
export class FacilityAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // VILLA

  displayStyle1 = "none";

  openPopupV() {
    this.displayStyle1 = "block";
  }
  closePopupV() {
    this.displayStyle1 = "none";
  }

  // HOUSE

  displayStyle2 = "none";

  openPopupH() {
    this.displayStyle2 = "block";
  }
  closePopupH() {
    this.displayStyle2 = "none";
  }

  // ROOM

  displayStyle3 = "none";

  openPopupR() {
    this.displayStyle3 = "block";
  }
  closePopupR() {
    this.displayStyle3 = "none";
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
