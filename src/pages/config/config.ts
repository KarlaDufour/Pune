import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

  verGraficas(){
    this.navCtrl.push('ChartsPage');
  }

  verNots(){
    this.navCtrl.push('NotificationsPage');
  }

  CloseSesion(){
    const confirm = this.alertCtrl.create({
      title: 'Cerrar Sesión',
      message: 'Estás seguro que deseas cerrar sesión',
      buttons: [
        {
          text: 'Disagree'
        },
        {
          text: 'Agree',
          handler: () => {
            this.navCtrl.push(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
