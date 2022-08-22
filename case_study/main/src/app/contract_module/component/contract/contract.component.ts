import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../customer_module/model/customer.model";
import {CustomerType} from "../../../customer_module/model/customer-type.model";
import {Contract} from "../../model/contract.model";
import {Facility} from "../../../facility_module/model/facility.model";
import {RentType} from "../../../facility_module/model/rent-type.model";
import {FacilityType} from "../../../facility_module/model/facility-type.model";
import {ContractService} from "../../service/contract.service";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  constructor(private contractService: ContractService) { }

  contractList: Contract[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.contractList = this.contractService.getAll();
  }

}
