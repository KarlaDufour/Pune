import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs-compat';
import { AngularFireDatabase } from '@angular/fire/database';
import { LocalNotifications } from "@ionic-native/local-notifications";

@IonicPage()
@Component({
  selector: 'page-nivel',
  templateUrl: 'nivel.html',
})
export class NivelPage {

  nivelRef: Observable<any[]>;

  lastNiv: any;

  lvl1;
  lvl2;
  lvl3;
  lvl4;
  lvl5;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularDB: AngularFireDatabase, private localNot: LocalNotifications) {

    this.nivelRef = angularDB.list('ultrasonic', ref => ref.limitToLast(1)).valueChanges();
    this.nivelRef.subscribe(dato => {
      dato.map(niv => {
        console.log('Nv: ' + niv.niv)
        if (niv.niv <= 60) {
          this.lvl1 = "#C0C0C0";
        }
        this.lastNiv = niv.niv;
      });
    });

  }

  ionViewDidLoad() {
  }

}
