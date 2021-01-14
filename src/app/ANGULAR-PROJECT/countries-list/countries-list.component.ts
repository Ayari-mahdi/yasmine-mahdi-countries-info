import { Component, Input, OnInit} from '@angular/core';
import { Countries } from '../model/Countries';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
 @Input() Countriess: Countries[]
  constructor() { }
  ngOnInit(): void {
  }
}
