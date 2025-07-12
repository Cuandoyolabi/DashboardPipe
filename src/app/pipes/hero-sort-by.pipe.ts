import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSortBy'
})

export class HeroSortByPipe implements PipeTransform {
  transform(value: Hero[], sortBy: keyof Hero | null ): Hero[] {

    if(!sortBy) return value;

    switch(sortBy){
      case 'name':
      return value.sort((a, b ) => a.name.localeCompare(b.name));

    default:
      return value;
    }
  }
}
