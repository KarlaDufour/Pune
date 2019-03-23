import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs-compat';
import { AngularFireDatabase } from '@angular/fire/database'

@IonicPage()
@Component({
  selector: 'page-ns2',
  templateUrl: 'ns2.html',
})
export class Ns2Page {

  datos: any;
  datost: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularDB: AngularFireDatabase) {
    this.datost = angularDB.list('notificaciones/sensor2', ref => ref.orderByChild('time')).snapshotChanges();

    this.datost.subscribe(actions =>{
      this.datos = actions
      actions.forEach(action => {
        console.log(action.payload.key);
      }); })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ns2Page');
  }

}
