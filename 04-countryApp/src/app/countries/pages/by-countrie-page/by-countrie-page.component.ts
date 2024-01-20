import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/contries.service';

@Component({
  selector: 'app-by-countrie-page',
  templateUrl: './by-countrie-page.component.html',
  styles: ``
})
export class ByCountriePageComponent {

  public contries: Country[]= [];

  constructor(private countriesService: CountriesService) {}

  searchByCountry( term:string):void {
    this.countriesService.searchContry( term )
    .subscribe( countries =>{
      this.contries = countries} );
  }

}
