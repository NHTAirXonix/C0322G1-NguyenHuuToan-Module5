import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer_module/customer/customer.component';
import { FacilityComponent } from './facility_module/facility/facility.component';
import { ContractComponent } from './contract_module/contract/contract.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { ErrorComponent } from './error_module/error.component';
import { CustomerAddComponent } from './customer_module/customer-add/customer-add.component';
import { CustomerEditComponent } from './customer_module/customer-edit/customer-edit.component';
import { FacilityAddComponent } from './facility_module/facility-add/facility-add.component';
import { FacilityEditComponent } from './facility_module/facility-edit/facility-edit.component';
import { ContractAddComponent } from './contract_module/contract-add/contract-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  { path: 'home', component: HomeComponent},

  { path: 'customer', component: CustomerComponent},
  { path: 'customerAdd', component: CustomerAddComponent},
  { path: 'customerEdit/:id', component: CustomerEditComponent},

  { path: 'facility', component: FacilityComponent},
  { path: 'facilityAdd', component: FacilityAddComponent},
  { path: 'facilityEdit/:id', component: FacilityEditComponent},

  { path: 'contract', component: ContractComponent},
  { path: 'contractAdd', component: ContractAddComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    FacilityComponent,
    ContractComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    FacilityAddComponent,
    FacilityEditComponent,
    ContractAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
