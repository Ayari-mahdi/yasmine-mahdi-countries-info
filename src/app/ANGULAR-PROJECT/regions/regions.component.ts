import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  constructor( 
    private router:Router,
  ) { }

  ngOnInit(): void {
  }
  selectreg(reg :string)
  {
    this.router.navigate(['countries',reg])
  }
}
