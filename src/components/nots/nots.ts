import { Component } from '@angular/core';

/**
 * Generated class for the NotsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nots',
  templateUrl: 'nots.html'
})
export class NotsComponent {

  text: string;

  constructor() {
    console.log('Hello NotsComponent Component');
    this.text = 'Hello World';
  }

}
