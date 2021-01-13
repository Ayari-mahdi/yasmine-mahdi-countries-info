import { Injectable } from '@angular/core';
import { Countries } from './model/Countries';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SVcountryService {
private Countriess:Countries[];

link = 'https://restcountries.eu/rest/v2/all';
link2 ='https://restcountries.eu/rest/v2/name/';
link3 ='https://restcountries.eu/rest/v2/region/';
  constructor(
    private http: HttpClient 
  ) { 
    this.Countriess = [
      new Countries("tunisie","tunis","africa",10000000,500000,"tunisia",["arabic","english"] ,"hi"),
      new Countries("maroc", "marrakech","africa",20000000,600000,"maghreb",["arabic"],"hi" ),
    ];
  }
  getCountriess(): Observable<Countries[]>
  {
    return this.http.get<Countries[]>(this.link);
  }
  getfakecountry()
  {
    return this.Countriess;
  }
   GetCountryByName(name: string): Observable<Countries> {
    return this.http.get<Countries>(this.link2 + name);
  }
  GetCountryByRegion(region: string): Observable<Countries[]> {
    return this.http.get<Countries[]>(this.link3 + region);
  }
  }
