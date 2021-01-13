import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Countries } from '../model/Countries';
import {Languages} from '../model/Countries';
import { SVcountryService } from '../svcountry.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
@Input() countries: Countries;
lang:Languages[];


  constructor(
    private svcountryService: SVcountryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  
  ) { }

  ngOnInit(): void {

     this.activatedRoute.params.subscribe(
      (params) =>{ console.log(params);
        this.svcountryService.GetCountryByName(params.name).subscribe(
         (countries) => {
                       this.countries = countries;
                       console.log(this.countries);    
                       },
          (error) => { 
                     alert('country name wrong');
                    this.router.navigate(['countries']);  
                     }    
        );
     });
     
  }
 
  

}
