import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

  Nots1(){
    this.navCtrl.push('Ns1Page')
  }
  Nots2(){
    this.navCtrl.push('Ns2Page')
  }
  Nots3(){
    this.navCtrl.push('Ns3Page')
  }
  Pros(){
    this.navCtrl.push('NpPage')
  }
}
