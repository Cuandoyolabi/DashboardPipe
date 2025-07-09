import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { interval } from 'rxjs';
import { AvailableLocal, LocaleService } from '../../services/locale.service';


@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('adam');
  nameUpper = signal('ADAM');
  fullName = signal('aDam sAMUEl InzuNzA RamIREZ');

  customDate = signal( new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log("tick");
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    })
  });

  changeLocale(locale: AvailableLocal) {
    console.log({locale})
    this.localeService.changeLocale(locale);
  }


}

