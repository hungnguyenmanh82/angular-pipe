import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from './heroes';

// Pure (true) = default: khi thay đổi thành phần của biến Pipe sẽ ko đc gọi. (performance nhanh hơn)
@Pipe({ name: 'flyingHeroes' })
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: Hero[]): Hero[] {
    return allHeroes.filter((hero) => hero.canFly);
  }
}

/**
 * Pure (true) = default: khi thay đổi thành phần của biến Pipe sẽ ko đc gọi. (performance nhanh hơn)
 * Pure (false): khi có thay đổi thành phần của variable thì Pipe sẽ đc gọi.
 */
/////// Identical except for the pure flag
@Pipe({
  name: 'flyingHeroesImpure',
  pure: false,
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe {}
