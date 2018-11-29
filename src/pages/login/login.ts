import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private LoginForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public afAuth: AngularFireAuth, public loadingCtrl: LoadingController) {
    this.LoginForm = new FormGroup({
      correo: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      contra: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
    })
  }

  login() {
    var email = this.LoginForm.value.correo;
    var pass = this.LoginForm.value.contra;
    var currentUser;
    let loader = this.loadingCtrl.create({
      content: "Cargando..."
    });
    loader.present();
    this.afAuth.auth.signInWithEmailAndPassword(email, pass).then((result) => {
      loader.dismiss();
      currentUser = result.user.uid;
      window.localStorage.setItem('CurrentUser', currentUser);
      var data = {
        user: result.user.email,
        lastLogin: result.user.metadata.lastSignInTime
      }
      this.navCtrl.setRoot(HomePage, data);
    })
  }
}
