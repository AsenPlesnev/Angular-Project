import { MaterializeModule, MaterializeDirective } from 'angular2-materialize';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeCreateComponent } from './grade-create/grade-create.component';
import { GradesAllComponent } from './grades-all/grades-all.component';
import { GradeEditComponent } from './grade-edit/grade-edit.component';



@NgModule({
  declarations: [
    GradeCreateComponent,
    GradesAllComponent,
    GradeEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterializeModule
  ],
  exports: [
    GradeCreateComponent,
    GradesAllComponent,
    GradeEditComponent
  ]
})
export class GradesModule { }
