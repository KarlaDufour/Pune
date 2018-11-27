import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TempPage } from '../temp/temp';
import { NivelPage } from '../nivel/nivel';
import { PresionPage } from '../presion/presion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  tab1Root = TempPage;
  tab2Root = NivelPage;
  tab3Root = PresionPage;

  loginUser: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  ionViewDidLoad(){
    this.loginUser = this.navParams.get('user');

    console.log('ionViewDidLoad HomePage');
  }
  openModal(){
    this.navCtrl.push('ConfigPage');
  }
}
