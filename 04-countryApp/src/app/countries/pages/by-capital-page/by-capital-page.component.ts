import { Component, ElementRef, ViewChild } from '@angular/core';
import { CountriesService } from '../../services/contries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public contries: Country[]= [];

  constructor(private countriesService: CountriesService) {}

  searchByCapital( term:string):void {
    this.countriesService.searchCApital( term )
    .subscribe( countries =>{
      this.contries = countries} );
  }
}
