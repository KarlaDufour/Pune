import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs-compat';
import { AngularFireDatabase } from '@angular/fire/database';
import { last } from 'rxjs-compat/operator/last';
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

  currentDate: string = new Date().toLocaleDateString();
  formatDate;
  formatTime;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularDB: AngularFireDatabase, private localNot: LocalNotifications) {

    this.getformatDate();

    this.nivelRef = angularDB.list('ultrasonic', ref => ref.limitToLast(1)).valueChanges();
    this.nivelRef.subscribe(dato => {
      var prueba = this.angularDB.list('valvula/prueba');
      var savV1 = this.angularDB.list('notificaciones/proceso');
  
      var data1 = { 'notif': 'Se ha abierto la válvula de llenado automaticamente', 'date': this.formatDate, 'time': this.formatTime };
      var data2 = { 'notif': 'Se ha cerrado la válvula de llenado automaticamente', 'date': this.formatDate, 'time': this.formatTime };

      dato.map(dist => {
        console.log('Nv: ' + dist.dist);
        if (dist.dist <= 30){
          this.localNot.schedule([
            {id: 1, title: 'Nivel estable'}
        ]);

        }else
        if (dist.dist <= 60) {
          this.localNot.schedule([
            {id: 1, title: 'Nivel 2: Nivel estable del tanque'}
          ]);
          this.lvl1 = "#C0C0C0"
        }else
        if (dist.dist <= 90){
          this.localNot.schedule([
            {id: 1, title: '¡Nivel 3! Nivel medio del tanque'}
          ]);
          this.lvl1 = "#C0C0C0"
          this.lvl2 = "#C0C0C0"
          prueba.set('prueba2', '0');
          savV1.push(data1);
          prueba.set('prueba1', '1');
    
        }else
        if (dist.dist <= 120){
          this.localNot.schedule([
            {id: 1, title: '¡Nivel 4! Favor de revisar el tanque'}
          ]);
          this.lvl1 = "#C0C0C0"
          this.lvl2 = "#C0C0C0"
          this.lvl3 = "#C0C0C0"
          prueba.set('prueba2', '0');
          savV1.push(data1);
          prueba.set('prueba1', '1');
        }else
        if (dist.dist <= 150){
          this.localNot.schedule([
            {id: 1, title: '¡Nivel 5! Favor de revisar el tanque'}
          ]);
          this.lvl1 = "#C0C0C0"
          this.lvl2 = "#C0C0C0"
          this.lvl3 = "#C0C0C0"
          this.lvl4 = "#C0C0C0"
          prueba.set('prueba2', '0');
          savV1.push(data1);
          prueba.set('prueba1', '1');

        }else
        if(dist.dist >= 150){
          this.lastNiv = 'Error en la medición'
          console.log("error en el sensor")
        }
        this.lastNiv = dist.dist;
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

  ionViewDidLoad() {
    
  }

}
