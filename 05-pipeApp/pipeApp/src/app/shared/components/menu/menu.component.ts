import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NumberPageComponent } from '../../../products/pages/number-page/number-page.component';


@Component({
  selector: 'shared-menu',
  templateUrl: 'menu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class MenuComponent {

  public menuItems: MenuItem[]= [];
    ngOnInit() {
      this.menuItems= [
          {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'Textos y Fechas',
                icon: 'pi pi-align-left',
                routerLink: '/'
              },
              {
                label: 'Numeros',
                icon: 'pi pi-dollar',
                routerLink: '/number'
              },
              {
                label: 'No comunes',
                icon: 'pi pi-globe',
                routerLink: '/uncommun'
              },

            ]

          },
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',

            items: [
              {
                label: 'Otro elemento',
                icon: 'pi pi-cog',
              }
            ]
          }

      ];



    }
}
