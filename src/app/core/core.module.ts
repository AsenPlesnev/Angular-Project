import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [NavigationComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    HomeComponent
  ]
})
export class CoreModule { }
