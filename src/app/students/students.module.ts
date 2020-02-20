import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentsAllComponent } from './students-all/students-all.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';



@NgModule({
  declarations: [
    CreateStudentComponent,
    StudentsAllComponent,
    StudentsEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateStudentComponent,
    StudentsAllComponent,
    StudentsEditComponent
  ]
})
export class StudentsModule { }
