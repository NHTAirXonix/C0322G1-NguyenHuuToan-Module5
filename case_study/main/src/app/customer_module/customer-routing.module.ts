import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from "./customer/customer.component";
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";
import {CustomerAddComponent} from "./customer-add/customer-add.component";
const routes: Routes = [
  {
    path: 'list',
    component: CustomerComponent
  },
  {
    path: 'create',
    component: CustomerAddComponent
  },
  {
    path: 'edit/:id',
    component: CustomerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
