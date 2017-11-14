import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BeveragesComponent } from './beverages/beverages.component';

const router: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'beverages', component: BeveragesComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);