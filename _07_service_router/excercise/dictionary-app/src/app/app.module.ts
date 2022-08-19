import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DetailComponent } from './detail/detail.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'list', component: DictionaryComponent},
  { path: 'detail/:id', component: DetailComponent},

  { path: '', redirectTo: 'list', pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
