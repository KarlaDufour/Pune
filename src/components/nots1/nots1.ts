import { Component } from '@angular/core';

@Component({
  selector: 'nots1',
  templateUrl: 'nots1.html'
})
export class Nots1Component {

  text: string;

  constructor() {
    console.log('Hello Nots1Component Component');
    this.text = 'Hello World';
  }

}
