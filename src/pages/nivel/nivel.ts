import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs-compat';
import { AngularFireDatabase } from '@angular/fire/database';

@IonicPage()
@Component({
  selector: 'page-nivel',
  templateUrl: 'nivel.html',
})
export class NivelPage {

  nivelRef : Observable<any[]>;
  lastNiv : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularDB: AngularFireDatabase) {
    this.nivelRef = angularDB.list('ultrasonic', ref => ref.limitToLast(1)).valueChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NivelPage');
  }

}
