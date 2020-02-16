import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get isLoggedIn(): boolean {
    const user = this.getLoggedInUser();
    return user !== null;
  }

  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  async login(email: string, password: string) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
      console.log(res);
      this.router.navigate(['/']);
    },
      err => {
        console.log(err.message);
      }
    );
  }

  async register(email: string, password: string) {
    await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        this.router.navigate(['/']);
      },
        err => {
          console.log(err);
        }
      );
  }

  async logout() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  getLoggedInUser() {
    var user = firebase.auth().currentUser;
    return user;
  }
}
