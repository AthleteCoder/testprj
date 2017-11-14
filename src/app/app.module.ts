import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DrinksComponent } from './drinks/drinks.component';
import { DetailsComponent } from './details/details.component';
import { Collection } from './services/collection.service';
import { BeveragesComponent } from './beverages/beverages.component';
import { HomeComponent } from './home/home.component';
import { routes } from './router.app';

@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    DetailsComponent,
    BeveragesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  providers: [Collection],
  bootstrap: [AppComponent]
})
export class AppModule { }
