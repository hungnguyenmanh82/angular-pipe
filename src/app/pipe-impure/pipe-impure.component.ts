import { Component, OnInit } from '@angular/core';
import { HEROES, Hero } from '../heroes';

@Component({
  selector: 'app-pipe-impure',
  templateUrl: './pipe-impure.component.html',
  styleUrls: ['./pipe-impure.component.scss']
})
export class PipeImpureComponent  implements OnInit  {
  heroes: Hero[] = [];
  canFly:boolean = false;

  isCreateNewArray: boolean = true;
  title = 'Flying Heroes (pipe, pure=false)';

  constructor() {  }

  ngOnInit(){
    this.canFly = true;
    this.isCreateNewArray = true;
    this.reset();
  }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    const hero = new Hero(name,this.canFly);

    // https://www.tutorialspoint.com/typescript/typescript_arrays.htm
    if (!this.isCreateNewArray) {
      /**
       * .push(): add new to the end of array cũ => array ko thay đổi. Chỉ có thành phần trong nó thay đổi.
       * cách này chỉ khi pure=false thì mới cập nhật thay đổi.
       */
      this.heroes.push(hero);
    } else {
      /**
       * .concat(): tạo array mới copy herroes và add new to the end.
       * Tạo theo cách này lãng phí memory => nhưng luôn đc Pipe update khi có thay đổi.
       */
      this.heroes = this.heroes.concat(hero);
    }
  }

  reset() { this.heroes = HEROES.slice(); }

}
