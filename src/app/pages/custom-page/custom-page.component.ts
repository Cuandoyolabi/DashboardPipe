import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes';
import { canFly } from '../../pipes/canFly.pipe';
import { heroColor } from '../../pipes/color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, canFly, heroColor, HeroTextColorPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal('Adam Ramirez');

  upperCase = signal(true);

  changeValue(){
    this.upperCase.update(value => !value);
  }

  heroes = signal(heroes);

}
