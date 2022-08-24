import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FacilityAddComponent} from "./facility-add/facility-add.component";
import {FacilityEditComponent} from "./facility-edit/facility-edit.component";
import {FacilityComponent} from "./facility/facility.component";
const routes: Routes = [
  {
    path: 'list',
    component: FacilityComponent
  },
  {
    path: 'create',
    component: FacilityAddComponent
  },
  {
    path: 'edit/:id',
    component: FacilityEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule {
}
