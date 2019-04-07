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

  estadoIm: Observable<any[]>;
  valNiv: Observable<any[]>;

  toggleValue: boolean;
  toggleValue2: boolean;

  estado: any = '--';
  estado2: any = '--';

  assetVal: string;
  assetVal2: string;

  show = true;
  currentDate: string = new Date().toLocaleDateString();

  formatDate;
  formatTime;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularDB: AngularFireDatabase,
    private localNot: LocalNotifications, public alertCtrl: AlertController) {
    this.getformatDate();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresionPage');
    this.initImg();
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

  initImg() {
    this.estadoIm = this.angularDB.list('valvula').valueChanges();
    var savV1 = this.angularDB.list('notificaciones/proceso');

    var data1 = { 'notif': 'Se ha abierto la válvula de llenado manualmente', 'date': this.formatDate, 'time': this.formatTime };
    var data2 = { 'notif': 'Se ha cerrado la válvula de vaciado manualmente', 'date': this.formatDate, 'time': this.formatTime };

    this.estadoIm.subscribe(dato => {
      console.log(dato);
      dato.map(val => {

        if (val.prueba1 == 1) {
          this.assetVal = "success.png";
          this.estado = "Abierta"
          this.toggleValue = true;  
        }
        if (val.prueba1 == 0) {
          this.assetVal = "error.png"
          this.estado = "Cerrada"
          this.toggleValue = false;
        }
        if (val.prueba2 == 1) {
          this.assetVal2 = "success.png";
          this.estado2 = "Abierta"
          this.toggleValue2 = true;
        }
        if (val.prueba2 == 0) {
          this.assetVal2 = "error.png"
          this.estado2 = "Cerrada"
          this.toggleValue2 = false;
        }

        if (val.prueba1 == 1 && val.prueba2 == 1) {
          this.toggleValue2 = false;
          this.toggleValue = false;
          const alert = this.alertCtrl.create({
            title: 'Alerta',
            message: 'No es posbile activar ambas válvulas. ¿Qué desea activar?',
            buttons: [{
              text: 'Válvula llenado',
              handler: data => {
                this.toggleValue = true;
                this.toggleValue2 = false;
                savV1.push(data1)
              }
            },
            {
              text: 'Válvula vaciado',
              handler: data => {
                this.toggleValue2 = true;
                this.toggleValue = false;
                savV1.push(data2)
              }
            }
            ]
          });

          alert.present();
        }
      });

    });

    this.valNiv = this.angularDB.list('ultrasonic').valueChanges();
    this.valNiv.subscribe(dato =>{
      var prueba = this.angularDB.list('valvula/prueba');

      dato.map(val =>{
        if (val.dist < 90){
          prueba.set('prueba2', '0');

        }
      });
    });
  }

  closeVal(){

  }
  
  en() {
    let prompt = this.alertCtrl.create({
      title: 'Acceso',
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
    var prueba = this.angularDB.list('valvula/prueba');
    var savV1 = this.angularDB.list('notificaciones/proceso');

    var data1 = { 'notif': 'Se ha abierto la válvula de llenado manualmente', 'date': this.formatDate, 'time': this.formatTime };
    var data2 = { 'notif': 'Se ha cerrado la válvula de llenado manualmente', 'date': this.formatDate, 'time': this.formatTime };

    if (this.toggleValue == true) {
      prueba.set('prueba1', '1')
      this.localNot.schedule([
        { title: 'Se ha abierto la valvula de llenado manualmente' }
      ])
      this.assetVal = "success.png";
      savV1.push(data1)
    } else {
      prueba.set('prueba1', '0')
      this.assetVal = "error.png"
      this.localNot.schedule([{
        title: 'Se ha cerrado la valvula de llenado manualmente'
      }]);
      savV1.push(data2)
    }
  }

  upVal2() {
    var prueba = this.angularDB.list('valvula/prueba');
    var savV1 = this.angularDB.list('notificaciones/proceso');

    var data1 = { 'notif': 'Se ha abierto la válvula de vaciado manualmente', 'date': this.formatDate, 'time': this.formatTime };
    var data2 = { 'notif': 'Se ha cerrado la válvula de vaciado manualmente', 'date': this.formatDate, 'time': this.formatTime };

    if (this.toggleValue2 == true) {
      prueba.set('prueba2', '1')
      this.localNot.schedule([
        { title: 'Se ha abierto la valvula de vaciado manualmente' }
      ])
      this.assetVal2 = "success.png";
      savV1.push(data1)
    } else {
      prueba.set('prueba2', '0')
      this.assetVal2 = "error.png"
      this.localNot.schedule([{
        title: 'Se ha cerrado la valvula de vaciado manualmente'
      }])
      savV1.push(data2)
    }
  }

}
