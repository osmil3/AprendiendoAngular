import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/contries.service';

type Regions = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public contries: Country[]= [];
  public regions: Regions[]= ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor(private countriesService: CountriesService) {}

  searchByRegion( term:string):void {
    this.countriesService.searchRegion( term )
    .subscribe( countries =>{
      this.contries = countries} );
  }

}
