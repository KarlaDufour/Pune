import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { LocalNotifications } from "@ionic-native/local-notifications";
import { Observable } from 'rxjs-compat';

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

  currentDate: string = new Date().toLocaleDateString();
  formatDate;
  formatTime;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularDB: AngularFireDatabase,
    private localNot: LocalNotifications) {
      this.getformatDate();
  }

  initData() {
    this.tempRef = this.angularDB.list('sensor', ref => ref.limitToLast(1)).valueChanges();
    this.tempRef.subscribe(dato => {
      console.log(dato);
      var savenot1 = this.angularDB.list('notificaciones/sensor1');

      dato.map(temp => {
        console.log('S1: ' + temp.temp);
        var data = { 'temp': 'Temperatura a ' + temp.temp + '°C', 'date': temp.date, 'time': temp.time };

        if (temp.temp <= 9) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp }
          ]);
          savenot1.push(data);
          this.cardColor1 = "tempDown";
        }
        if (temp.temp >= 10) {
          savenot1.push(data);
          this.cardColor1 = "tempOk";
        }
        if (temp.temp >= 27) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp }
          ]);
          savenot1.push(data);
          this.cardColor1 = "tempWarning"
        }
        if (temp.temp >= 30) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! Temperatura a ' + temp.temp }
          ]);
          savenot1.push(data);
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
        var savenot2 = this.angularDB.list('notificaciones/sensor2');
        var data = { 'temp': 'Temperatura a ' + temp.temp + '°C', 'date': temp.date, 'time': temp.time };

        this.lastTemp2 = temp.temp;
        if (temp.temp <= 9) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp }
          ]);
          savenot2.push(data);
          this.cardColor2 = "tempDown";
        }
        if (temp.temp >= 10) {
          savenot2.push(data);
          this.cardColor2 = "tempOk";
        }

        if (temp.temp >= 27) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp }
          ]);
          savenot2.push(data);
          this.cardColor2 = "tempWarning"
        }
        if (temp.temp >= 30) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! Temperatura a ' + temp.temp }
          ]);
          savenot2.push(data);
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
        var savenot3 = this.angularDB.list('notificaciones/sensor3');
        var data = { 'temp': 'Temperatura a ' + temp.temp + '°C', 'date': temp.date, 'time': temp.time };

        this.lastTemp3 = temp.temp;
        if (temp.temp <= 9) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp }
          ]);
          savenot3.push(data);
          this.cardColor3 = "tempDown";
        }
        if (temp.temp >= 10) {
          savenot3.push(data);
          this.cardColor3 = "tempOk";
        }
        if (temp.temp >= 27) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! La temperatura se encuentra a ' + temp.temp }
          ]);
          savenot3.push(data);
          this.cardColor3 = "tempWarning"
        }
        if (temp.temp >= 30) {
          this.localNot.schedule([
            { id: 1, title: 'ALERTA! Temperatura a ' + temp.temp }
          ]);
          savenot3.push(data);
          this.cardColor3 = "tempUp";
        }
        this.lastTemp3 = temp.temp;
        this.calculateAverageTemp(this.lastTemp, this.lastTemp2, this.lastTemp3);
      });
    });

  }

  getformatDate() {
    var obj = new Date();

    var year = obj.getFullYear().toString()
    var month = obj.getMonth().toString()
    var day = obj.getDate().toString()
    var hour = obj.getHours().toString()
    var minutes = obj.getMinutes().toString()

    this.formatDate = day + '/' + month + '/' + year;
    this.formatTime = hour + ':' + minutes;
  }

  calculateAverageTemp(t1, t2, t3) {
    var prueba = this.angularDB.list('valvula/prueba');
    var savV1 = this.angularDB.list('notificaciones/proceso');

    var data1 = { 'notif': 'Se ha abierto la válvula de vaciado automaticamente', 'date': this.formatDate, 'time': this.formatTime };
    var data2 = { 'notif': 'Se ha cerrado la válvula de vaciado automaticamente', 'date': this.formatDate, 'time': this.formatTime };

    this.promedio = Math.round((t1 + t2 + t3) / 3);
    console.log(this.promedio);

    if (this.promedio <= 9) {
      this.cardColorProm = "tempPromDown";
      this.assetTemp = "tempDown.png";
      prueba.set('prueba2', '1');
      savV1.push(data2);
      prueba.set('prueba1', '0');
    }
    if (this.promedio >= 10) {
      this.cardColorProm = "tempPromOk";
      this.assetTemp = "tempOk.png";
    }
    if (this.promedio >= 27) {
      this.cardColorProm = "tempPromWarning"
      this.assetTemp = "tempWarning.png";
      prueba.set('prueba2', '1');
      savV1.push(data2);
      prueba.set('prueba1', '0');
    }
    if (this.promedio >= 30) {
      this.cardColorProm = "tempPromUp";
      this.assetTemp = "tempUp.png";
      prueba.set('prueba2', '1');
      savV1.push(data2);
      prueba.set('prueba1', '0');
    }
  }

  ionViewDidLoad() {
    this.initData();
  }

}
