import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<auth.User> | Observable<any>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
   }

  login(){
    const provider = new auth.GoogleAuthProvider();
    this.afAuth.signInWithRedirect(provider)
  }

  logout(){
    this.afAuth.signOut();
  }
}
