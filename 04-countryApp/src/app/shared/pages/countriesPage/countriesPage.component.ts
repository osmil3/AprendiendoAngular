import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-countries-page',
  templateUrl: 'countriesPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class CountriesPageComponent { }
