import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

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
          {label: 'New'},
          {label: 'Open'},
          {label: 'Undo'},
      ];
    }
}
