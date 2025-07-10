import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creatorText'
})

export class HeroCreatorText implements PipeTransform {
  transform(value: number): string {
    return value ? "MARVEL" : "DC";
  }
}
