import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Countries } from '../model/Countries';
import { SVcountryService } from '../svcountry.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  Countriess: Countries [];
  constructor(
    private svcountryService:SVcountryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit(): void {
   this.svcountryService.getCountriess().subscribe(
     (Countriess) =>{
        this.Countriess = Countriess;},
        (error) => {
          alert('porblem d acces a l api');
          this.Countriess = this.svcountryService.getfakecountry();
        }
   );
   {
    this.activatedRoute.params.subscribe(
     (params) =>{
       this.svcountryService.GetCountryByRegion(params.region).subscribe(
        (Countriess) => {
                      this.Countriess = Countriess;
                      console.log(this.Countriess);    
                      },
                   
         (error) => {
                   this.router.navigate(['countries']);  
                    }    
       );
    });
 }
}
}
