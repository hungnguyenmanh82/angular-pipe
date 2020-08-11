
export class Hero{
  name:string;
  canFly: boolean;
  constructor(name:string,canFly:boolean){
    this.name = name;
    this.canFly = canFly;
  }
}
export const HEROES: Hero[] =  [
  new Hero('Windstorm', true),
  new Hero('Bombasto',false),
  new Hero('Magneto', false),
  new Hero('Tornado', true)
];
