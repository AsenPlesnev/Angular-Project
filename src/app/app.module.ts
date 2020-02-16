import { AuthModule } from './auth/auth.module';
import { environment } from './../environments/environment.prod';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';

const config = {
  apiKey: 'AIzaSyCnUFwTqkpo7shPoLcXFMd-A2BdZ1kavU0',
  authDomain: 'netbook-angular.firebaseapp.com',
  databaseURL: 'https://netbook-angular.firebaseio.com',
  projectId: 'netbook-angular',
  storageBucket: 'netbook-angular.appspot.com',
  messagingSenderId: '312386191607'
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
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
