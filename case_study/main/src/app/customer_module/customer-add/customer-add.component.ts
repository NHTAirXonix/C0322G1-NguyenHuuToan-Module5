// import {Component, OnInit} from '@angular/core';
// import {CustomerType} from "../model/customer-type.model";
// import {CustomerTypeService} from "../service/customer-type.service";
// import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from "@angular/forms";
// import {CustomerService} from "../service/customer.service";
// import {Router} from "@angular/router";
// import {ToastrService} from "ngx-toastr";
//
// @Component({
//   selector: 'app-customer-add',
//   templateUrl: './customer-add.component.html',
//   styleUrls: ['./customer-add.component.css']
// })
//
// export class CustomerAddComponent implements OnInit {
//
//   formSignUp: FormGroup | any;
//
//   constructor(private customerTypeService: CustomerTypeService,
//               private  fb: FormBuilder,
//               private customerService: CustomerService,
//               private router: Router,
//               private toast: ToastrService) {
//   }
//
//   customerTypeList: CustomerType[] = [];
//
//   ngOnInit(): void {
//
//     this.formSignUp = this.fb.group({
//       id: ['', Validators.required],
//       name: ['', customerName],
//       birthday: ['',checkBirthDay],
//       email: ['', [Validators.required,Validators.email]],
//       gender: ['', Validators.required],
//       type: ['', Validators.required],
//       idNumber: ['', customerIdNumber],
//       phone: ['', customerPhone],
//       address: ['', Validators.required],
//       status: [true]
//     });
//
//     this.getAll();
//
//   }
//
//   getAll() {
//     this.customerTypeList = this.customerTypeService.getAll();
//   }
//
//   onSubmit() {
//     const customer = this.formSignUp.value;
//     // this.customerService.save(customer,this.formSignUp.value.type)
//     this.router.navigate(['/customer'])
//     this.toast.success('Create Customer success !');
//   }
//
//
// }
//
// function customerName (formControl: FormControl) {
//   if (formControl.value == '') {
//     return {name: true, message: 'Name is required'};
//   } else
//   if (!formControl.value.match('^[A-Z](?:\'[A-Z])*[a-z]+(?: [A-Z](?:\'[A-Z])*[a-z]+)*$')) {
//     return {name: true, message: 'Wrong Format'};
//   } else
//   return null;
// }
//
// function customerPhone (formControl: FormControl) {
//   if (formControl.value == '') {
//     return {phone: true, message: 'Phone is required !'};
//   } else
//   if (!formControl.value.match('^(090)[0-9]{7}|(091)[0-9]{7}|(\\(84\\)\\+90)[0-9]{7}|(\\(84\\)\\+91)[0-9]{7}$')) {
//     return {phone: true, message: 'Wrong Format !'};
//   } else
//     return null;
// }
//
// function customerIdNumber (formControl: FormControl) {
//   if (formControl.value == '') {
//     return {idNumber: true, message: 'ID Number is required !'};
//   } else
//   if (!formControl.value.match('^([0-9]{9})|([0-9]{12})$')) {
//     return {idNumber: true, message: 'Wrong Format !'};
//   } else
//     return null;
// }
//
// function customerBirthDay (formControl: FormControl) {
//   let input: Date = formControl.value
//
//   let now = new Date();
//
//   if (formControl.value == '') {
//     return {idNumber: true, message: 'Birthday is required !'};
//   } else
//   if (true) {
//     console.log(input + 'first');
//     console.log(now.toLocaleDateString());
//     return {idNumber: true, message: 'Wrong Format !'};
//   } else
//     return null;
// }
//
// function checkBirthDay(control: AbstractControl) {
//   const birthDay = new Date(control.value);
//   if (dateDiff(birthDay, new Date()) < 1096 || dateDiff(birthDay, new Date()) > 36503) {
//     return {checkAge: true};
//   }
//   return null;
// }
//
// function parseDate(str: string) {
//   let dmy = str.split('-');
//   return new Date(Number(dmy[0]), Number(dmy[1]) - 1, Number(dmy[2]));
// }
//
// function dateDiff(first: number | Date, second: number | Date) {
//   // @ts-ignore
//   return Math.round((second - first) / (1000 * 60 * 60 * 24));
// }
import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../model/customer-type.model";
import {CustomerTypeService} from "../service/customer-type.service";
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
// @ts-ignore
import {Observable} from "rxjs/dist/types";
import {CustomerI} from "../model/customer-i";
import {CustomerTypeI} from "../model/customer-type-i";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})

export class CustomerAddComponent implements OnInit {

  customerTypeList: Observable<CustomerTypeI[]> = [];

  formSignUp: FormGroup | any;

  constructor(private customerTypeService: CustomerTypeService,
              private  fb: FormBuilder,
              private customerService: CustomerService,
              private router: Router,
              private toast: ToastrService) {
  }



  ngOnInit(): void {

    this.formSignUp = this.fb.group({
      id: ['', Validators.required],
      name: ['', customerName],
      birthday: ['',checkBirthDay],
      email: ['', [Validators.required,Validators.email]],
      gender: ['', Validators.required],
      customerTypeI: ['', Validators.required],
      idNumber: ['', customerIdNumber],
      phone: ['', customerPhone],
      address: ['', Validators.required],
      status: [true]
    });

    this.getAll();

  }

  getAll() {
    this.customerTypeService.getAll().subscribe((next: CustomerTypeI[]) =>{this.customerTypeList = next;});
  }

  onSubmit() {
    const customer = this.formSignUp.value;
    for (let i=0; i<this.customerTypeList;i++) {
      if (this.customerTypeList[i].id === customer.customerTypeI.id) {
        customer.customerTypeI = this.customerTypeList[i];
      }
    }
    // customer.customerTypeI = {
    //   id: customer.customerTypeI
    // };
    this.customerService.save(customer).subscribe(() => {
      this.toast.success('Create Customer success !');
    }), this.toast.error('Create Customer failure !');
    this.router.navigate(['/customer'])

    // this.customerService.save(customer,this.formSignUp.value.type)
  }


}

function customerName (formControl: FormControl) {
  if (formControl.value == '') {
    return {name: true, message: 'Name is required'};
  } else
  if (!formControl.value.match('^[A-Z](?:\'[A-Z])*[a-z]+(?: [A-Z](?:\'[A-Z])*[a-z]+)*$')) {
    return {name: true, message: 'Wrong Format'};
  } else
    return null;
}

function customerPhone (formControl: FormControl) {
  if (formControl.value == '') {
    return {phone: true, message: 'Phone is required !'};
  } else
  if (!formControl.value.match('^(090)[0-9]{7}|(091)[0-9]{7}|(\\(84\\)\\+90)[0-9]{7}|(\\(84\\)\\+91)[0-9]{7}$')) {
    return {phone: true, message: 'Wrong Format !'};
  } else
    return null;
}

function customerIdNumber (formControl: FormControl) {
  if (formControl.value == '') {
    return {idNumber: true, message: 'ID Number is required !'};
  } else
  if (!formControl.value.match('^([0-9]{9})|([0-9]{12})$')) {
    return {idNumber: true, message: 'Wrong Format !'};
  } else
    return null;
}

function checkBirthDay(control: AbstractControl) {
  const birthDay = new Date(control.value);
  if (dateDiff(birthDay, new Date()) < 1096 || dateDiff(birthDay, new Date()) > 36503) {
    return {checkAge: true};
  }
  return null;
}

function parseDate(str: string) {
  let dmy = str.split('-');
  return new Date(Number(dmy[0]), Number(dmy[1]) - 1, Number(dmy[2]));
}

function dateDiff(first: number | Date, second: number | Date) {
  // @ts-ignore
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}
