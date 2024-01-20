import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: 'contryTable.component.html',
  styles: `
    img{
      width: 25px;
    }
  `,
})
export class CountryTableComponent {

  @Input()
  public countries: Country[]= [];
 }
