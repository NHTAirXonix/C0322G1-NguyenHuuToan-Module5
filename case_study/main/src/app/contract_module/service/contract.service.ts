import { Injectable } from '@angular/core';
import {Contract} from "../../model/contract.model";
import {Customer} from "../../model/customer.model";
import {CustomerType} from "../../model/customer-type.model";
import {Facility} from "../../model/facility.model";
import {RentType} from "../../model/rent-type.model";
import {FacilityType} from "../../model/facility-type.model";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor() { }

  contractList: Contract[] = [
    new Contract(1,
      '2022-10-10',
      '2022-10-15',
      300,
      new Customer(1, new CustomerType(1,'Diamond'), 'Nguyen Huu Toan', '1999-06-10', 'Male', 201802281, '0971263514', 'toan@gmail.com', '295 Ton Duc Thang', true),
      new Facility(1, 'OCEAN SUITE', 85.5, 1200, 15, 'Vip','Big Pool',20,3,'','assets/image/f1.jpg',true,new RentType(1,'Hour'),new FacilityType(1,'Villa'))
    ),

    new Contract(2,
      '2022-10-15',
      '2022-10-20',
      500,
      new Customer(2, new CustomerType(2,'Platinum'), 'Nguyen Hoang Hao', '1998-05-10', 'Male', 333802281, '0981263312', 'hao@gmail.com', '95 Nguyen Huy Tuong', true),
      new Facility(2, 'OCEAN STUDIO SUITE', 40.1, 2000, 20, 'Luxyry','Big Pool',20,4,'','assets/image/f2.jpg',true,new RentType(2,'Day'),new FacilityType(1,'Villa'))
    ),

    new Contract(3,
      '2022-10-20',
      '2022-10-25',
      600,
      new Customer(3, new CustomerType(3,'Gole'), 'Nguyen Thao Uyen', '1997-09-10', 'FeMale', 444802281, '0961263132', 'uyen@gmail.com', '102 Hoang Hoa Tham', true),
      new Facility(3, 'OCEAN DELUXE', 43.7, 800, 10, 'Normal','No Pool',0,1,'','assets/image/f3.jpg',true,new RentType(3,'Month'),new FacilityType(1,'House'))
    ),

    new Contract(4,
      '2022-10-25',
      '2022-10-30',
      500,
      new Customer(4, new CustomerType(4,'Silver'), 'Nguyen Duong Trung Kien', '1996-12-10', 'Male', 555802281, '0931263123', 'kien@gmail.com', '05 Ton That Tung', true),
      new Facility(4, 'LAGOON SUPERIOR', 40.1, 1000, 10, 'Vip','Big Pool',20,2,'','assets/image/f4.jpg',true,new RentType(1,'Hour'),new FacilityType(1,'Villa'))
    ),

    new Contract(5,
      '2022-10-05',
      '2022-10-10',
      300,
      new Customer(5, new CustomerType(5,'Member'), 'Tran Xuan Truong', '1995-11-10', 'Male', 666802281, '0941263321', 'truong@gmail.com', '88 Nguyen Luong Bang', true),
      new Facility(5, 'GARDEN SUPERIOR', 40.1, 700, 6, 'Normal','No Pool',0,2,'','assets/image/f5.jpg',true,new RentType(2,'Day'),new FacilityType(1,'House'))
    ),
  ];

  getAll() {
    return this.contractList;
  }

  // save(customer: any,id: any) {
  //   let customerType;
  //   for (let i =0; i< this.customerTypeList.length; i++ ){
  //     if (this.customerTypeList[i].getid() == id) {
  //       let newCustomer = new Customer(
  //         customer.id,
  //         this.customerTypeList[i],
  //         customer.name,
  //         customer.birthday,
  //         customer.gender,
  //         customer.idNumber,
  //         customer.phone,
  //         customer.email,
  //         customer.address,
  //         customer.status)
  //       this.customerList.push(newCustomer);
  //     }
  //   }
  // }
}
