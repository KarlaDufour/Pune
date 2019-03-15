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

  dato: any;
  datos: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularDB: AngularFireDatabase) {
    
    this.datos = angularDB.list('sensor').snapshotChanges();

    this.datos.subscribe(actions =>{
      this.dato = actions
      actions.forEach(action => {
        //temp: action.temp
        //temp: action.payload.val().temp,

        console.log(action.temp);
      }); })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ns1Page');
  }

}
