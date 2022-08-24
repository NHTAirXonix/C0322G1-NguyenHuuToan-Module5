import {Component, OnInit} from '@angular/core';
import {Customer} from '../../customer_module/model/customer.model';
import {CustomerType} from '../../customer_module/model/customer-type.model';
import {Facility} from '../model/facility.model';
import {RentType} from '../model/rent-type.model';
import {FacilityType} from '../model/facility-type.model';
import {CustomerService} from '../../customer_module/service/customer.service';
import {FacilityService} from '../service/facility.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  constructor(private facilityService: FacilityService) {
  }

  facilityList: Facility[] = [];

  idFacility: any = '';
  nameFacility: any = '';
  displayStyle = 'none';

  ngOnInit(): void {
    this.getListFacility();
  }

  private getListFacility() {
    this.facilityList = this.facilityService.getAll();
  }

  openPopup(idFacility: any, nameFacility: any) {
    this.idFacility = idFacility;
    this.nameFacility = nameFacility;
    this.displayStyle = 'block';
  }

  closePopup() {
    this.displayStyle = 'none';
  }

  callService() {
    this.facilityService.deleteFacility(this.idFacility);
    this.getListFacility();
    this.closePopup();
  }
}
