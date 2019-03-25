import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { LocalNotifications } from "@ionic-native/local-notifications";
import { Observable } from 'rxjs-compat';
import { AlertController } from 'ionic-angular';
import { getLocaleTimeFormat } from '@angular/common';
import { t } from '@angular/core/src/render3';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@IonicPage()
@Component({
  selector: 'page-presion',
  templateUrl: 'presion.html',
})
export class PresionPage {

  estadoIm: Observable<any[]>;
  estado2Im: Observable<any[]>;

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

  getformatDate(){
    var obj = new Date();

    var year = obj.getFullYear().toString()
    var month = obj.getMonth().toString()
    var day = obj.getDate().toString()
    var hour = obj.getHours().toString()
    var minutes = obj.getMinutes().toString()
    
    this.formatDate = day + '/' + month + '/' + year;
    this.formatTime = hour + ':' + minutes;
  }

  initImg(){
    this.estadoIm = this.angularDB.list('valvula').valueChanges();
    this.estadoIm.subscribe(dato =>{
      console.log(dato);
      dato.map(val =>{
        
        if(val.prueba1 == 1){
          this.assetVal = "success.png";
          this.estado = "Abierta"
        }
        if(val.prueba1 == 0){
          this.assetVal="error.png"
          this.estado = "Cerrada"
        }
        if(val.prueba2 == 1){
          this.assetVal = "success.png";
          this.estado = "Abierta"
        }
        if(val.prueba2 == 0){
          this.assetVal="error.png"
          this.estado = "Cerrada"
        }
      });
  });
  }

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
    var prueba = this.angularDB.list('valvula/prueba');
    var savV1 = this.angularDB.list('notificaciones/proceso');

    var data1 = {'notif': 'Se ha abierto la valvula de llenado manualmente', 'date': this.formatDate, 'time': this.formatTime};
    var data2 = {'notif': 'Se ha cerrado la valvula de llenado manualmente', 'date': this.formatDate, 'time': this.formatTime};

    if (this.toggleValue == true) {
      prueba.set('prueba1', '1')
      this.localNot.schedule([
        { title: 'Se ha abierto la valvula de llenado manualmente' }
      ])
      this.assetVal = "success.png";
      savV1.push(data1)
    }else {
      prueba.set('prueba1', '0')

      this.assetVal="error.png"
      this.toggleValue = false;

      this.localNot.schedule([{
        title: 'Se ha cerrado la valvula de llenado manualmente'
      }]);
      savV1.push(data2)
    }
  }

  upVal2() {
    var prueba = this.angularDB.list('valvula/prueba');
    var savV1 = this.angularDB.list('notificaciones/proceso');

    var data1 = {'notif': 'Se ha abierto la valvula de vaciado manualmente', 'date': this.formatDate, 'time': this.formatTime};
    var data2 = {'notif': 'Se ha cerrado la valvula de vaciado manualmente', 'date': this.formatDate, 'time': this.formatTime};

    if (this.toggleValue2 == true) {
      prueba.set('prueba2','1')
      this.localNot.schedule([
        { title: 'Se ha abierto la valvula de vaciado manualmente' }
      ])
      this.assetVal2 = "success.png";
      savV1.push(data1)
    }else {
      prueba.set('prueba2','0')
      this.assetVal2="error.png"
      this.toggleValue2 = false;
      this.localNot.schedule([{
        title: 'Se ha cerrado la valvula de vaciado manualmente'
      }])
      savV1.push(data2)
    }
  }

}
