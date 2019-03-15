import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { LocalNotifications } from "@ionic-native/local-notifications";
import { Observable } from 'rxjs-compat';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-presion',
  templateUrl: 'presion.html',
})
export class PresionPage {

  valvula: Observable<any[]>;
  toggleValue: boolean;
  toggleValue2: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularDB: AngularFireDatabase,
    private localNot: LocalNotifications, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresionPage');
  }

  /*confirm() {
    var prueba = this.angularDB.object('valvula/prueba');

    const alert = this.alertCtrl.create({
      message: "Confirmar acción",
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log("close");
        }
      },
      {
        text: 'Okay',
        handler: () => {
          if (this.toggleValue == true) {
            prueba.set('1')
          }
          if(this.toggleValue == false){
            prueba.set('0')
          }
        }
      }
      ]
    });
    alert.present();
  }*/

  upVal1() {
    var prueba = this.angularDB.object('valvula/prueba');
    var savV1 = this.angularDB.list('notificaciones/proceso');

    if (this.toggleValue == true) {
      prueba.set('1')
      this.localNot.schedule([
        { title: 'Se ha abierto la valvula de llenado' }
      ])
      savV1.push('Se ha abierto la valvula de llenado')
    }else {
      prueba.set('0')
      this.toggleValue = false;
      this.localNot.schedule([{
        title: 'Se ha cerrado la valvula de llenado'
      }]);
      savV1.push('Se ha cerrado la valvula de llenado')
    }
  }

  upVal2() {
    var prueba = this.angularDB.object('valvula/prueba2');
    var savV1 = this.angularDB.list('notificaciones/proceso');

    if (this.toggleValue2 == true) {
      prueba.set('1')
      this.localNot.schedule([
        { title: 'Se ha abierto la valvula de vaciado' }
      ])
      savV1.push('Se ha abierto la valvula de vaciado')
    }else {
      prueba.set('0')
      this.toggleValue2 = false;
      this.localNot.schedule([{
        title: 'Se ha cerrado la valvula de vaciado'
      }])
      savV1.push('Se ha cerrado la valvula de vaciado')
    }
  }
}
