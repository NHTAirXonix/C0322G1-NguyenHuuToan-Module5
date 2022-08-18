import { Injectable } from '@angular/core';
import {Facility} from "../../model/facility.model";
import {RentType} from "../../model/rent-type.model";
import {FacilityType} from "../../model/facility-type.model";
import {FacilityTypeService} from "./facility-type.service";
import {RentTypeService} from "./rent-type.service";
import {Customer} from "../../model/customer.model";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  rentTypeList: RentType[] = this.rentType.getAll();

  facilityTypeList: FacilityType[] = this.facilityTypeService.getAll();

  constructor(private facilityTypeService: FacilityTypeService,
              private rentType: RentTypeService
  ) { }

  facilityList: Facility[] = [
    new Facility(1, 'OCEAN SUITE', 85.5, 1200, 15, 'Vip','Big Pool',20,3,'0','assets/image/f1.jpg',true,new RentType(1,'Hour'),new FacilityType(1,'Villa')),
    new Facility(2, 'OCEAN STUDIO SUITE', 40.1, 2000, 20, 'Luxury','Big Pool',20,4,'0','assets/image/f2.jpg',true,new RentType(2,'Day'),new FacilityType(1,'Villa')),
    new Facility(3, 'OCEAN DELUXE', 43.7, 800, 10, 'Normal','No Pool',0,1,'0','assets/image/f3.jpg',true,new RentType(3,'Month'),new FacilityType(1,'House')),
    new Facility(4, 'LAGOON SUPERIOR', 40.1, 1000, 10, 'Vip','Big Pool',20,2,'0','assets/image/f4.jpg',true,new RentType(1,'Hour'),new FacilityType(1,'Villa')),
    new Facility(5, 'GARDEN SUPERIOR', 40.1, 700, 6, 'Normal','No Pool',0,2,'0','assets/image/f5.jpg',true,new RentType(2,'Day'),new FacilityType(1,'House')),
    new Facility(6, 'GARDEN DELUXE', 43.7, 500, 5, 'Cheap','No Pool',0,0,'0','assets/image/f6.jpg',true,new RentType(3,'Month'),new FacilityType(1,'Room')),
  ];

  getAll() {
    return this.facilityList;
  }

  findById(id: number) {
    return this.facilityList.find(facility => facility.getid() === id);
  }

  save(facility: any, idFacilityType: any, idRentType: any) {
    let facilityType;
    let rentType;
    for (let i =0; i< this.rentTypeList.length;i++){
      if (idRentType == this.rentTypeList[i].getid()) {
        rentType = this.rentTypeList[i];
      }
    }
    for (let i =0; i< this.facilityTypeList.length;i++){
      if (idFacilityType == this.facilityTypeList[i].getid()) {
        facilityType = this.facilityTypeList[i];
      }
    }
    let newFacility = new Facility(
    facility.id,
    facility.name,
    facility.area,
    facility.cost,
    facility.people,
    facility.standard,
    facility.decription,
    facility.poolArea,
    facility.floor,
    facility.facilityFree,
    facility.urlImg,
    true,
    // @ts-ignore
    rentType,
    facilityType
    )
    this.facilityList.push(newFacility);
  }

  updateProduct(id: number, facility: any,idRentType: any,idFacilityType: any) {
    let facilityType;
    let rentType;
    for (let i =0; i< this.rentTypeList.length;i++){
      if (idRentType == this.rentTypeList[i].getid()) {
        rentType = this.rentTypeList[i];
      }
    }
    for (let i =0; i< this.facilityTypeList.length;i++){
      if (idFacilityType == this.facilityTypeList[i].getid()) {
        facilityType = this.facilityTypeList[i];
      }
    }
    for (let i =0; i< this.facilityList.length;i++){
      if (id == this.facilityList[i].getid()) {
        this.facilityList[i].setid(facility.id);
        this.facilityList[i].setname(facility.name);
        this.facilityList[i].setarea(facility.area);
        this.facilityList[i].setcost(facility.cost);
        this.facilityList[i].setstandard(facility.standard);
        this.facilityList[i].setdecription(facility.decription);
        this.facilityList[i].setpoolArea(facility.poolArea);
        this.facilityList[i].setfloor(facility.floor);
        this.facilityList[i].setfacilityFree(facility.facilityFree);
        this.facilityList[i].seturlImg(facility.urlImg);
        this.facilityList[i].setstatus(true);
        this.facilityList[i].setrenttype(
          // @ts-ignore
          rentType);
        this.facilityList[i].setfacilitytype(
          // @ts-ignore
          facilityType);
      }
    }
  }

  deleteFacility(id: number) {
    this.facilityList = this.facilityList.filter(facility => {
      return facility.getid() !== id;
    });
  }
}

