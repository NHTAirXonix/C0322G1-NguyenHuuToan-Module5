import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingupRformComponent } from './singup-rform/singup-rform.component';

@NgModule({
  declarations: [
    AppComponent,
    SingupRformComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
