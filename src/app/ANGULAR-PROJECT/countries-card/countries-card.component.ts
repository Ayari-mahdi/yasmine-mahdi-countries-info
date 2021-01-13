import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Countries } from '../model/Countries';

@Component({
  selector: 'app-countries-card',
  templateUrl: './countries-card.component.html',
  styleUrls: ['./countries-card.component.css']
})
export class CountriesCardComponent implements OnInit {
  @Input() countries:Countries;
  constructor(
  ) { }

  ngOnInit(): void {
  }
  

}
