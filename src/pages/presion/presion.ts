import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PresionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

    if (this.toggleValue == true) {
      prueba.set('1')
      this.localNot.schedule([
        { title: 'Se ha abierto la valvula' }
      ])
    }
    else
      prueba.set('0')
    this.toggleValue = false;
    this.localNot.schedule([{
      title: 'Se ha cerrado la valvula'
    }]);

  }

  upVal2() {
    var prueba = this.angularDB.object('valvula/prueba2');

    if (this.toggleValue2 == true) {
      prueba.set('1')
      this.localNot.schedule([
        { title: 'Se ha abierto la valvula' }
      ])
    }
    else
      prueba.set('0')
    this.toggleValue2 = false;
    this.localNot.schedule([{
      title: 'Se ha cerrado la valvula'
    }])
  }
}
