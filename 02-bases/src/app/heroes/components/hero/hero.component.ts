import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman'
  public age: number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHEroDescription():string{
    return`${this.name }-${this.age}`
  }

  changeHero():void{ //se realizo como tarea, esta es mi solucion
    if(this.name == 'ironman'){
      this.name = 'spiderman';
    }
    else{
      this.name = 'ironman';
    }
  }

  changeAge():void{ //se realizo como tarea, esta es mi solucion
    if(this.age == 45){
        this.age= 22;
    }
    else{
      this.age = 45;
    }
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }

}
