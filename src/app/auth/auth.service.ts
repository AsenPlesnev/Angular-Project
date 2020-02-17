import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  private notifier: NotifierService;

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  constructor(public afAuth: AngularFireAuth, public router: Router, notifier: NotifierService) {
    this.notifier = notifier;

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  async login(email: string, password: string) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
      this.router.navigate(['/teachers/']);
      this.showNotification('success', 'Successfully logged in.');
    },
      err => {
        this.showNotification('error', err.message);
      }
    );

  }

  async register(email: string, password: string) {
    await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.router.navigate(['/teachers']);
        this.showNotification('success', 'Successfully registered.')
      },
        err => {
          this.showNotification('error', err.message);
        }
      );
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
    this.showNotification('success', 'Successfully logged out');
  }
}
