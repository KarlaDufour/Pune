import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs-compat';
import { AngularFireDatabase } from '@angular/fire/database';
import { last } from 'rxjs-compat/operator/last';

@IonicPage()
@Component({
  selector: 'page-temp',
  templateUrl: 'temp.html',
})
export class TempPage {

  tempRef: Observable<any[]>;
  tempRef2: Observable<any[]>;;
  tempRef3: Observable<any[]>;;
  lastTemp: any;
  lastTemp2: any;
  lastTemp3: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public angularDB: AngularFireDatabase) {
    this.tempRef = angularDB.list('sensor', ref => ref.limitToLast(1)).valueChanges();

    this.tempRef.subscribe(dato => {
      dato.map(temp => {
        console.log('S1: '+temp.temp);
        this.lastTemp = temp.temp;
      });
    });
    this.tempRef = angularDB.list('sensor2', ref => ref.limitToLast(1)).valueChanges();

    this.tempRef.subscribe(dato => {
      dato.map(temp => {
        console.log('S2: '+temp.temp);
        this.lastTemp2 = temp.temp;
      });
    });
    this.tempRef = angularDB.list('sensor3', ref => ref.limitToLast(1)).valueChanges();

    this.tempRef.subscribe(dato => {
      dato.map(temp => {
        console.log('S3: '+temp.temp);
        this.lastTemp3 = temp.temp;
      });
    });

  }

  ionViewDidLoad() {
   
  }

}
