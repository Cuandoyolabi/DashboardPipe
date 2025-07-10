import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroColor'
})

export class heroColor implements PipeTransform {
  transform(value: number,): string {
    return Color[value];
  }
}

