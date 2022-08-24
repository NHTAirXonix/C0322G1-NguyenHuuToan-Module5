import {Component, OnInit} from '@angular/core';
import {RentType} from '../model/rent-type.model';
import {FacilityType} from '../model/facility-type.model';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {FacilityService} from '../service/facility.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FacilityTypeService} from '../service/facility-type.service';
import {RentTypeService} from '../service/rent-type.service';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  formFacility: FormGroup | any;
  id: number | any;
  facility: any;

  constructor(private facilityService: FacilityService,
              private  fb: FormBuilder,
              private facilityTypeService: FacilityTypeService,
              private rentType: RentTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {

      // @ts-ignore
      this.id = +paramMap.get('id');
      this.facility = this.getFacility(this.id);
      console.log(this.facility);

      this.formFacility = this.fb.group({
        facilityFree: [
          // @ts-ignore
          this.facility.facilityFree, Validators.required],
        poolArea: [
          // @ts-ignore
          this.facility.poolArea, Validators.required],
        id: [
          // @ts-ignore
          this.facility.id, Validators.required],
        name: [
          // @ts-ignore
          this.facility.name, facilityName],
        area: [
          // @ts-ignore
          this.facility.area, Validators.required],
        cost: [
          // @ts-ignore
          this.facility.cost, Validators.required],
        standard: [
          // @ts-ignore
          this.facility.standard, Validators.required],
        decription: [
          // @ts-ignore
          this.facility.decription, Validators.required],
        people: [
          // @ts-ignore
          this.facility.people, Validators.required],
        floor: [
          // @ts-ignore
          this.facility.floor, Validators.required],
        rentType: [
          // @ts-ignore
          this.facility.rentType.getid(), Validators.required],
        facilityType: [
          // @ts-ignore
          this.facility.facilityType.getid(), Validators.required],
        urlImg: [
          // @ts-ignore
          this.facility.urlImg, Validators.required]
      });
    });
  }

  rentTypeList: RentType[] = [];

  facilityTypeList: FacilityType[] = [];

  roomStandardList: string[] = [('Vip'), ('Luxury'), ('Normal'), ('Cheap')];

  poolInput = false;
  standardRoom = false;
  flood = false;
  decription = false;
  freeServiceShow = true;
  allInput = false;

  ngOnInit(): void {
    this.getAll();
  }


  check(idFacility: any) {
    // tslint:disable-next-line:triple-equals
    if (idFacility.facilityType == '1') {
      this.freeServiceShow = true;

      this.poolInput = false;
      this.standardRoom = false;
      this.flood = false;
      this.decription = false;
      this.allInput = false;

      this.formFacility = this.fb.group({
        facilityFree: [
          // @ts-ignore
          '0', Validators.required],
        poolArea: [
          // @ts-ignore
          this.facility.poolArea, [Validators.required, Validators.min(0)]],
        id: [
          // @ts-ignore
          this.facility.id, Validators.required],
        name: [
          // @ts-ignore
          this.facility.name, facilityName],
        area: [
          // @ts-ignore
          this.facility.area, Validators.required],
        cost: [
          // @ts-ignore
          this.facility.cost, Validators.required],
        standard: [
          // @ts-ignore
          this.facility.standard, Validators.required],
        decription: [
          // @ts-ignore
          this.facility.decription, Validators.required],
        people: [
          // @ts-ignore
          this.facility.people, Validators.required],
        floor: [
          // @ts-ignore
          this.facility.floor, [Validators.required, Validators.min(0)]],
        rentType: [
          // @ts-ignore
          this.facility.rentType.getid(), Validators.required],
        facilityType: [
          // @ts-ignore
          '1', Validators.required],
        urlImg: [
          // @ts-ignore
          this.facility.urlImg, Validators.required]
      });
    }
    // tslint:disable-next-line:triple-equals
    if (idFacility.facilityType == '2') {
      this.freeServiceShow = true;
      this.poolInput = true;

      this.standardRoom = false;
      this.flood = false;
      this.decription = false;
      this.allInput = false;

      this.formFacility = this.fb.group({
        facilityFree: [
          // @ts-ignore
          '0', Validators.required],
        poolArea: [
          // @ts-ignore
          this.facility.poolArea, [Validators.required, Validators.min(0)]],
        id: [
          // @ts-ignore
          this.facility.id, Validators.required],
        name: [
          // @ts-ignore
          this.facility.name, facilityName],
        area: [
          // @ts-ignore
          this.facility.area, Validators.required],
        cost: [
          // @ts-ignore
          this.facility.cost, Validators.required],
        standard: [
          // @ts-ignore
          this.facility.standard, Validators.required],
        decription: [
          // @ts-ignore
          this.facility.decription, Validators.required],
        people: [
          // @ts-ignore
          this.facility.people, Validators.required],
        floor: [
          // @ts-ignore
          this.facility.floor, [Validators.required, Validators.min(0)]],
        rentType: [
          // @ts-ignore
          this.facility.rentType.getid(), Validators.required],
        facilityType: [
          // @ts-ignore
          '2', Validators.required],
        urlImg: [
          // @ts-ignore
          this.facility.urlImg, Validators.required]
      });
    }
    // tslint:disable-next-line:triple-equals
    if (idFacility.facilityType == '3') {
      this.standardRoom = true;
      this.poolInput = true;
      this.flood = true;
      this.decription = true;

      this.freeServiceShow = false;

      this.formFacility = this.fb.group({
        facilityFree: [
          // @ts-ignore
          this.facility.facilityFree, Validators.required],
        poolArea: [
          // @ts-ignore
          this.facility.poolArea, [Validators.required, Validators.min(0)]],
        id: [
          // @ts-ignore
          this.facility.id, Validators.required],
        name: [
          // @ts-ignore
          this.facility.name, facilityName],
        area: [
          // @ts-ignore
          this.facility.area, Validators.required],
        cost: [
          // @ts-ignore
          this.facility.cost, Validators.required],
        standard: [
          // @ts-ignore
          '0', Validators.required],
        decription: [
          // @ts-ignore
          this.facility.decription, Validators.required],
        people: [
          // @ts-ignore
          this.facility.people, Validators.required],
        floor: [
          // @ts-ignore
          this.facility.floor, [Validators.required, Validators.min(0)]],
        rentType: [
          // @ts-ignore
          this.facility.rentType.getid(), Validators.required],
        facilityType: [
          // @ts-ignore
          '3', Validators.required],
        urlImg: [
          // @ts-ignore
          this.facility.urlImg, Validators.required]
      });
    }
  }

  private getAll() {
    this.rentTypeList = this.rentType.getAll();
    this.facilityTypeList = this.facilityTypeService.getAll();
  }

  onSubmit() {
    const customer = this.formFacility.value;
    console.log(this.formFacility);
    this.facilityService.save(customer, this.formFacility.value.type, this.formFacility.value.rentType);
    this.router.navigate(['/facility']);
  }

  getFacility(id: number) {
    return this.facilityService.findById(id);
  }

  updateFacility(id: number) {
    const facility = this.formFacility.value;
    this.facilityService.updateProduct(id, facility, facility.rentType, facility.facilityType);
    this.router.navigate(['/facility']);
  }
}

function facilityName(formControl: FormControl) {
  if (formControl.value.length === 0) {
    return {name: true, message: 'Name is required'};
  } else if (!formControl.value.match('^[a-zA-Z](?:\'[a-zA-Z])*[a-zA-Z]+(?: [a-zA-Z](?:\'[a-zA-Z])*[a-zA-Z]+)*$')) {
    return {name: true, message: 'Wrong Format'};
  } else {
    return null;
  }
}
