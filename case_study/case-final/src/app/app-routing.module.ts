import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'customer', loadChildren: () => import('./customer_module/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'facility', loadChildren: () => import('./facility_module/facility.module').then(module => module.FacilityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
