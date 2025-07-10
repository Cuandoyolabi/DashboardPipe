import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes';
import { canFly } from '../../pipes/canFly.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, canFly],
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
