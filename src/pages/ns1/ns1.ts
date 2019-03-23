import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { AngularFireDatabase } from '@angular/fire/database'

@IonicPage()
@Component({
  selector: 'page-ns1',
  templateUrl: 'ns1.html',
})
export class Ns1Page {

  datos: any;
  datost: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularDB: AngularFireDatabase) {
    
    this.datost = angularDB.list('sensor', ref => ref.orderByChild('time')).snapshotChanges();

    this.datost.subscribe(actions =>{
      this.datos = actions
      actions.forEach(action => {
        console.log(action.payload.key);
      }); })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ns1Page');
  }

}
