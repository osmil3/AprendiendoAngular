import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public herosName: string[]= ['Spiderman','Thor','Hulk','Ironman','Shehulk'];
  public deleteHero?: string;

  removeLastHero():void{
    this.deleteHero = this.herosName.pop();
  }


}
