import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs-compat';
import { AngularFireDatabase } from '@angular/fire/database';
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

  lastTemp: any = '--';
  lastTemp2: any = '--';
  lastTemp3: any = '--';

  cardColor1: string = "tempInit";
  cardColor2: string = "tempInit";
  cardColor3: string = "tempInit";
  cardColorProm;

  promedio: number;
  assetTemp: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularDB: AngularFireDatabase, private localNot: LocalNotifications) {



  }

  initData() {
    this.tempRef = this.angularDB.list('sensor', ref => ref.limitToLast(1)).valueChanges();
    this.tempRef.subscribe(dato => {
      console.log(dato);
      
      dato.map(temp => {
        console.log('S1: ' + temp.temp);
        if (temp.temp <= 9) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp }
          ]);
          this.cardColor1 = "tempDown";
        }
        if (temp.temp >= 10) {
          this.cardColor1 = "tempOk";
        }
        if (temp.temp >= 27) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp }
          ]);
          this.cardColor1 = "tempWarning"
        }
        if (temp.temp >= 30) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! Temperatura a ' + temp.temp }
          ]);
          this.cardColor1 = "tempUp";
        }
        this.lastTemp = temp.temp;
        this.calculateAverageTemp(this.lastTemp, this.lastTemp2, this.lastTemp3);
      });
    });

    this.tempRef2 = this.angularDB.list('sensor2', ref => ref.limitToLast(1)).valueChanges();
    this.tempRef2.subscribe(dato => {
      dato.map(temp => {
        console.log('S2: ' + temp.temp);
        this.lastTemp2 = temp.temp;
        if (temp.temp <= 9) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp }
          ]);
          this.cardColor2 = "tempDown";
        }
        if (temp.temp >= 10) {
          this.cardColor2 = "tempOk";
        }

        if (temp.temp >= 27) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp }
          ]);
          this.cardColor2 = "tempWarning"
        }
        if (temp.temp >= 30) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! Temperatura a ' + temp.temp }
          ]);
          this.cardColor2 = "tempUp";
        }
        this.lastTemp2 = temp.temp;
        this.calculateAverageTemp(this.lastTemp, this.lastTemp2, this.lastTemp3);
      });
    });

    this.tempRef3 = this.angularDB.list('sensor3', ref => ref.limitToLast(1)).valueChanges();
    this.tempRef3.subscribe(dato => {
      dato.map(temp => {
        console.log('S3: ' + temp.temp);
        this.lastTemp3 = temp.temp;
        if (temp.temp <= 9) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp }
          ]);
          this.cardColor3 = "tempDown";
        }
        if (temp.temp >= 10) {
          this.cardColor3 = "tempOk";
        }
        if (temp.temp >= 27) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp }
          ]);
          this.cardColor3 = "tempWarning"
        }
        if (temp.temp >= 30) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! Temperatura a ' + temp.temp }
          ]);
          this.cardColor3 = "tempUp";
        }
        this.lastTemp3 = temp.temp;
        this.calculateAverageTemp(this.lastTemp, this.lastTemp2, this.lastTemp3);
      });
    });


  }

  calculateAverageTemp(t1, t2, t3) {
    this.promedio = Math.round((t1 + t2 + t3) / 3);

    if (this.promedio <= 9) {
      this.cardColorProm = "tempPromDown";
      this.assetTemp = "tempDown.png";
    }
    if (this.promedio >= 10) {
      this.cardColorProm = "tempPromOk";
      this.assetTemp = "tempOk.png";
    }
    if (this.promedio >= 27) {
      this.cardColorProm = "tempPromWarning"
      this.assetTemp = "tempWarning.png";
    }
    if (this.promedio >= 30) {
      this.cardColorProm = "tempPromUp";
      this.assetTemp = "tempUp.png";
    }
  }

  ionViewDidLoad() {
   this.initData();
  }


}
