import { Injectable, signal } from '@angular/core';

export type AvailableLocal = 'es' | 'fr' | 'en';


@Injectable({providedIn: 'root'})
export class LocaleService {

  private currentLocale = signal<AvailableLocal>('fr');

  constructor(){
    this.currentLocale.set(
      (localStorage.getItem('locale') as AvailableLocal) ?? 'es'
    );
  }

  get getLocale(){
    return this.currentLocale();
  }

  changeLocale(locale: AvailableLocal){
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }

}
