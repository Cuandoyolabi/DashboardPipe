import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Adam',
  gender: 'male',
  age: 23,
  addres: 'Otawa, Canada',
};

const client2 = {
  name: 'Paulina',
  gender: 'female',
  age: 24,
  addres: 'Toronto, Canada',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }
item: any;

  changeClient(){
    if(this.client() == client1){
      this.client.set(client2)
      return;
    }

    this.client.set(client1)
  }

  clientsMap = signal({

    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando.'

  })

  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Melissa',
    'Juan',
    'Andrea',
    'Sofia',
    'Carlos',
    'Luis',
    'Ana',
    'Javier',

  ]);

  deleteClient(){
    this.clients.update((prev) => prev.slice(1));
  }

  //Key Value Pipe
  profile = {
    name: 'Fernando',
    age: 37,
    addres: 'Japon, Kioto'
  }

  //Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log("Promesa finalizada");
    }, 3500 );
  })

  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap: ', value))
  );


}
