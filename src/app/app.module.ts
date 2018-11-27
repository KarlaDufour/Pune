import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import { TempPage } from '../pages/temp/temp';
import { NivelPage } from '../pages/nivel/nivel';
import { PresionPage } from '../pages/presion/presion';
import { PrefixNot } from '@angular/compiler';

export const config  ={
  apiKey: "AIzaSyB4vEP-vHOlmILDK8-tG6J5RDvUgCFeGHk",
  authDomain: "proyectoune-b3ff3.firebaseapp.com",
  databaseURL: "https://proyectoune-b3ff3.firebaseio.com",
  projectId: "proyectoune-b3ff3",
  storageBucket: "proyectoune-b3ff3.appspot.com",
  messagingSenderId: "586330331937"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TempPage,
    NivelPage,
    PresionPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TempPage,
    NivelPage,
    PresionPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
