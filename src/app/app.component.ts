import { Component, ViewChildren, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ChartsPage } from '../pages/charts/charts';
import { NotificationsPage } from '../pages/notifications/notifications';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {/*
      var currentUser = window.localStorage.getItem("CurrentUser");
      if (currentUser) {
        this.rootPage = HomePage
      } else {
        this.rootPage = LoginPage
      }*/
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide()
    });

    this.pages = [
      {title: 'Temperatura', component: ChartsPage },
      {title: 'Notificaciones', component: NotificationsPage},
      {title: 'Ayuda', component: null},
      {title: 'Informacion', component: null},
    ];

  }

  openPage(page){
    this.nav.setRoot(page.component);
  }
  
}

