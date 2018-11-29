import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs-compat';
import { AngularFireDatabase } from '@angular/fire/database';
import { last } from 'rxjs-compat/operator/last';
import { LocalNotifications } from "@ionic-native/local-notifications";

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

  cardColor1;
  cardColor2;
  cardColor3;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public angularDB: AngularFireDatabase, private localNot: LocalNotifications) {

    this.tempRef = angularDB.list('sensor', ref => ref.limitToLast(1)).valueChanges();
    this.tempRef.subscribe(dato => {
      dato.map(temp => {
        console.log('S1: '+temp.temp);
        if (temp.temp <= 9) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp }
          ]);
          this.cardColor2 = "#99FFFF";
        }
        if (temp.temp >= 27){
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp}
          ]);
          this.cardColor2 = "#FF9933"
        }
        if (temp.temp >= 30){
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! Temperatura a ' + temp.temp}
          ]);
          this.cardColor3 = "#FF0000";
        }
        this.lastTemp = temp.temp;
      });
    });

    this.tempRef2 = angularDB.list('sensor2', ref => ref.limitToLast(1)).valueChanges();
    this.tempRef2.subscribe(dato => {
      dato.map(temp => {
        console.log('S2: '+temp.temp);
        this.lastTemp2 = temp.temp;
        if (temp.temp <= 9) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp }
          ]);
          this.cardColor2 = "#99FFFF";
        }
        if (temp.temp >= 27){
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp}
          ]);
          this.cardColor2 = "#FF9933"
        }
        if (temp.temp >= 30){
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! Temperatura a ' + temp.temp}
          ]);
          this.cardColor3 = "#FF0000";
        }
        this.lastTemp2 = temp.temp;
      });
    });

    this.tempRef3 = angularDB.list('sensor3', ref => ref.limitToLast(1)).valueChanges();
    this.tempRef3.subscribe(dato => {
      dato.map(temp => {
        console.log('S3: '+temp.temp);
        this.lastTemp3 = temp.temp;
        if (temp.temp <= 9) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp }
          ]);
          this.cardColor3 = "#99FFFF";
        }
        if (temp.temp >= 27){
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp}
          ]);
          this.cardColor3 = "#FF9933"
        }
        if (temp.temp >= 30){
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! Temperatura a ' + temp.temp}
          ]);
          this.cardColor3 = "#FF0000";
        }
        this.lastTemp3 = temp.temp;
      });
    });

  }

  ionViewDidLoad() {
  }
 
}
