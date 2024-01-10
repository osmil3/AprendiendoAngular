import { DbzService } from './../services/dbz.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  constructor(private dbzService: DbzService){
    dbzService.characters
  }

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void {
    this.dbzService.onDeleteCharacterById(id);
  }

  addCharacter( character: Character):void{
    this.dbzService.addCharacter(character);
  }

}
