import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentsAllComponent } from './students-all/students-all.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { StudentGradesComponent } from './student-grades/student-grades.component';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    CreateStudentComponent,
    StudentsAllComponent,
    StudentsEditComponent,
    StudentGradesComponent,
    InfoComponent,
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
