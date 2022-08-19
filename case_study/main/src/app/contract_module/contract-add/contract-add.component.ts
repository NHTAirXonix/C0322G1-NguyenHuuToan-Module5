import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../customer_module/service/customer.service";
import {FacilityService} from "../../facility_module/service/facility.service";
import {CustomerType} from "../../model/customer-type.model";
import {Customer} from "../../model/customer.model";
import {Facility} from "../../model/facility.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-contract-add',
  templateUrl: './contract-add.component.html',
  styleUrls: ['./contract-add.component.css']
})
export class ContractAddComponent implements OnInit {

  formSignUp: FormGroup | any;
  customerList: Customer[] = [];
  facilityList: Facility[] = [];

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private contractService: ContractService,
              private router: Router,
              private  fb: FormBuilder
              ) { }

  ngOnInit(): void {

    this.formSignUp = this.fb.group({
      id: ['', Validators.required],
      dayStart: ['', Validators.required],
      dayEnd: ['', Validators.required],
      deposit: ['', Validators.required],
      customer: ['', Validators.required],
      facility: ['', Validators.required]
    });

    this.getAll();
  }

  getAll() {
    this.customerList = this.customerService.getAll();
    this.facilityList = this.facilityService.getAll();
  }

  onSubmit() {
    const contract = this.formSignUp.value;
    this.contractService.save(contract,this.formSignUp.value.customer,this.formSignUp.value.facility)
    this.router.navigate(['/contract'])
  }
}
