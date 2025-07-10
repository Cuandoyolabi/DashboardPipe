import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canflyPipe'
})

export class canFly implements PipeTransform {
  transform(value: boolean): string {
    return value ? "Puede volar" : "No puede volar";
  }
}
