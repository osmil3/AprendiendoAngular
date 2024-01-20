import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/contries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public contries: Country[]= [];

  constructor(private countriesService: CountriesService) {}

  searchByRegion( term:string):void {
    this.countriesService.searchRegion( term )
    .subscribe( countries =>{
      this.contries = countries} );
  }

}
