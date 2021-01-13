import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ANGULAR-PROJECT/home/home.component';
import { RegionsComponent } from './ANGULAR-PROJECT/regions/regions.component';
import { CountriesComponent } from './ANGULAR-PROJECT/countries/countries.component';
import { CountryComponent } from './ANGULAR-PROJECT/country/country.component';

const routes: Routes = [
  {path:'country/:name',component:CountryComponent},
  {path:'countries/:region',component:CountriesComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'regions',component:RegionsComponent},
  {path:'countries',component:CountriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
