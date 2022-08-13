import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer.model";
import {CustomerType} from "../model/customer-type.model";
import {Facility} from "../model/facility.model";
import {RentType} from "../model/rent-type.model";
import {FacilityType} from "../model/facility-type.model";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  facilityList: Facility[] = [
    new Facility(1, 'OCEAN SUITE', 85.5, 1200, 15, 'Vip','Big Pool',20,3,'','assets/image/f1.jpg',true,new RentType(1,'Hour'),new FacilityType(1,'Villa')),
    new Facility(2, 'OCEAN STUDIO SUITE', 40.1, 2000, 20, 'Luxyry','Big Pool',20,4,'','assets/image/f2.jpg',true,new RentType(2,'Day'),new FacilityType(1,'Villa')),
    new Facility(3, 'OCEAN DELUXE', 43.7, 800, 10, 'Normal','No Pool',0,1,'','assets/image/f3.jpg',true,new RentType(3,'Month'),new FacilityType(1,'House')),
    new Facility(4, 'LAGOON SUPERIOR', 40.1, 1000, 10, 'Vip','Big Pool',20,2,'','assets/image/f4.jpg',true,new RentType(1,'Hour'),new FacilityType(1,'Villa')),
    new Facility(5, 'GARDEN SUPERIOR', 40.1, 700, 6, 'Normal','No Pool',0,2,'','assets/image/f5.jpg',true,new RentType(2,'Day'),new FacilityType(1,'House')),
    new Facility(6, 'GARDEN DELUXE', 43.7, 500, 5, 'Cheap','No Pool',0,0,'','assets/image/f6.jpg',true,new RentType(3,'Month'),new FacilityType(1,'Room')),

  ];

}
