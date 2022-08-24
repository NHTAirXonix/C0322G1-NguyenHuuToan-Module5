import {Component, OnInit} from '@angular/core';
import {RentType} from '../model/rent-type.model';
import {FacilityType} from '../model/facility-type.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../service/facility.service';
import {Router} from '@angular/router';
import {FacilityTypeService} from '../service/facility-type.service';
import {RentTypeService} from '../service/rent-type.service';

@Component({
  selector: 'app-facility-add',
  templateUrl: './facility-add.component.html',
  styleUrls: ['./facility-add.component.css']
})
export class FacilityAddComponent implements OnInit {

  formFacility: FormGroup | any;

  rentTypeList: RentType[] = [];

  facilityTypeList: FacilityType[] = [];


  roomStandardList: string[] = [
    ('Vip'),
    ('Luxury'),
    ('Normal'),
    ('Cheap')
  ];

  constructor(private facilityService: FacilityService,
              private  fb: FormBuilder,
              private facilityTypeService: FacilityTypeService,
              private rentType: RentTypeService,
              private router: Router) {
  }

  poolInput = false;
  standardRoom = false;
  flood = false;
  decription = false;
  freeServiceShow = true;
  allInput = false;

  ngOnInit(): void {

    this.formFacility = this.fb.group({
      facilityFree: ['', Validators.required],
      poolArea: ['', [Validators.required, Validators.min(0)]],
      id: ['', Validators.required],
      name: ['', facilityName],
      area: ['', Validators.required],
      cost: ['', Validators.required],
      standard: ['', Validators.required],
      decription: ['', Validators.required],
      people: ['', Validators.required],
      floor: ['', [Validators.required, Validators.min(0)]],
      rentType: ['', Validators.required],
      facilityType: ['', Validators.required],
      urlImg: ['', Validators.required]
    });

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
        facilityFree: ['0', Validators.required],
        poolArea: ['', [Validators.required, Validators.min(0)]],
        id: ['', Validators.required],
        name: ['', facilityName],
        area: ['', Validators.required],
        cost: ['', Validators.required],
        standard: ['', Validators.required],
        decription: ['', Validators.required],
        people: ['', Validators.required],
        floor: ['', [Validators.required, Validators.min(0)]],
        rentType: ['', Validators.required],
        facilityType: ['1', Validators.required],
        urlImg: ['', Validators.required]
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
        facilityFree: ['0', Validators.required],
        poolArea: ['0', [Validators.required, Validators.min(0)]],
        id: ['', Validators.required],
        name: ['', facilityName],
        area: ['', Validators.required],
        cost: ['', Validators.required],
        standard: ['', Validators.required],
        decription: ['', Validators.required],
        people: ['', Validators.required],
        floor: ['', [Validators.required, Validators.min(0)]],
        rentType: ['', Validators.required],
        facilityType: ['2', Validators.required],
        urlImg: ['', Validators.required]
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
        facilityFree: ['', Validators.required],
        poolArea: ['0', [Validators.required, Validators.min(0)]],
        id: ['', Validators.required],
        name: ['', facilityName],
        area: ['', Validators.required],
        cost: ['', Validators.required],
        standard: ['0', Validators.required],
        decription: ['0', Validators.required],
        people: ['', Validators.required],
        floor: ['0', [Validators.required, Validators.min(0)]],
        rentType: ['', Validators.required],
        facilityType: ['3', Validators.required],
        urlImg: ['', Validators.required]
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
    this.router.navigate(['/customer']);
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
