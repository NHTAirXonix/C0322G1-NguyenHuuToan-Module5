import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { LikeComponent } from './like/like.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'home', component: HomeComponent},

  { path: 'action', component: ArticleComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LikeComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
