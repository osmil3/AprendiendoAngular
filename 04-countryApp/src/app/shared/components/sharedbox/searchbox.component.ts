import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-searchbox',
  templateUrl: 'searchbox.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SearchboxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string):void {
    this.onValue.emit( value );
  }

}
