import { TeachersModule } from './teachers/teachers.module';
import { AuthModule } from './auth/auth.module';
import { environment } from './../environments/environment.prod';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';

const config = {
  apiKey: 'AIzaSyAPIQQsZaYEBBbYTEKFX72AgxuczMC1oC0',
  authDomain: 'https://netbook-3f7c5.firebaseio.com',
  databaseURL: 'https://netbook-angular.firebaseio.com',
  projectId: 'netbook-3f7c5',
  storageBucket: 'netbook-3f7c5.appspot.com',
  messagingSenderId: '64824196094'
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MaterializeModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AuthModule,
    NotifierModule,
    TeachersModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
