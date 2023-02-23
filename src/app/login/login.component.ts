import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  firebaseAuth = AngularFireAuth;
  constructor(private afAuth: AngularFireAuth) {
  }

  login(){
    const provider = new auth.GoogleAuthProvider();
    this.afAuth.signInWithRedirect(provider)
  }
}
