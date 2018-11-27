import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs-compat';
import { AngularFireDatabase } from '@angular/fire/database';

@IonicPage()
@Component({
  selector: 'page-temp',
  templateUrl: 'temp.html',
})
export class TempPage {

  tempe: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public angularDB: AngularFireDatabase) {
    this.tempe = angularDB.list('sensor').snapshotChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TempPage');
  }

}
