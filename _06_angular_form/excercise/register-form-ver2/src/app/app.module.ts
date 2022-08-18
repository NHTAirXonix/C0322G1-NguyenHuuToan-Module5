import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SignInComponent} from './sign-in.component'
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignUpComponent} from "./sign-up.component";
import { RegisterformComponent } from './registerform/registerform.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    RegisterformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
