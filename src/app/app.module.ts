import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegionsComponent } from './ANGULAR-PROJECT/regions/regions.component';
import { HeaderComponent } from './ANGULAR-PROJECT/header/header.component';
import { CountriesComponent } from './ANGULAR-PROJECT/countries/countries.component';
import { HomeComponent } from './ANGULAR-PROJECT/home/home.component';
import { CountriesCardComponent } from './ANGULAR-PROJECT/countries-card/countries-card.component';
import { CountriesListComponent } from './ANGULAR-PROJECT/countries-list/countries-list.component';
import { CountryComponent } from './ANGULAR-PROJECT/country/country.component';



@NgModule({
  declarations: [AppComponent,HomeComponent, RegionsComponent, HeaderComponent, CountriesComponent, CountriesCardComponent, CountriesListComponent, CountryComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule, NgbModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
