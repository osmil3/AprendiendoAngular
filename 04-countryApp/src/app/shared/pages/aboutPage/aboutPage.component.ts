import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-about-page',
  templateUrl: 'aboutPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class AboutPageComponent { }
