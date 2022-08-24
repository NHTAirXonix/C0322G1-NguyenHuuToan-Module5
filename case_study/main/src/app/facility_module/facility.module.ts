import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {FacilityRoutingModule} from "./facility-routing.module";
import {FacilityAddComponent} from "./facility-add/facility-add.component";
import {FacilityEditComponent} from "./facility-edit/facility-edit.component";
import {FacilityComponent} from "./facility/facility.component";

@NgModule({
  declarations: [FacilityComponent,FacilityAddComponent,FacilityEditComponent],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule { }
