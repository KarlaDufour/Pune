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

  assetVal: string;
  assetVal2: string;

  show = true;

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

  en(){
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Ingresar datos para activación manual",
      inputs: [
        {
          name: 'usuario',
          placeholder: 'usuario'
        },
        {
          name: 'contraseña',
          placeholder: 'contraseña',
          type: 'password',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            if (data.usuario == 'admin' && data.contraseña == 'admin') {
              console.log('ok')
              this.show = false;
            } else {
              this.show = true;
              return false;
            }
          }
        }
      ]
    });
    prompt.present();

  }

  upVal1() {
    var prueba = this.angularDB.list('valvula/');
    var savV1 = this.angularDB.list('notificaciones/proceso');

    console.log(prueba);

    if (this.toggleValue == true) {
      prueba.set('prueba', '1')
      this.localNot.schedule([
        { title: 'Se ha abierto la valvula de llenado manualmente' }
      ])
      this.assetVal = "success.png";
      savV1.push('Se ha abierto la valvula de llenado manualmente')
    }else {
      prueba.set('prueba', '0')

      this.assetVal="error.png"
      this.toggleValue = false;

      this.localNot.schedule([{
        title: 'Se ha cerrado la valvula de llenado manualmente'
      }]);
      savV1.push('Se ha cerrado la valvula de llenado manualmente')
    }
  }

  upVal2() {
    var prueba = this.angularDB.list('valvula/');
    var savV1 = this.angularDB.list('notificaciones/proceso');

    if (this.toggleValue2 == true) {
      prueba.set('prueba2','1')
      this.localNot.schedule([
        { title: 'Se ha abierto la valvula de vaciado manualmente' }
      ])
      this.assetVal2 = "success.png";
      savV1.push('Se ha abierto la valvula de vaciado manualmente')
    }else {
      prueba.set('prueba2','0')
      this.assetVal2="error.png"
      this.toggleValue2 = false;
      this.localNot.schedule([{
        title: 'Se ha cerrado la valvula de vaciado manualmente'
      }])
      savV1.push('Se ha cerrado la valvula de vaciado manualmente')
    }
  }
}
