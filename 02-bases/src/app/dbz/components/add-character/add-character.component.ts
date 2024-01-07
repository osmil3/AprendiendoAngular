import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.html',
  styleUrls: ['./add-character.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacterComponent { }
