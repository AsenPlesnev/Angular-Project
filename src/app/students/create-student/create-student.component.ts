import { NotifierService } from 'angular-notifier';
import { StudentsService } from './../students.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  constructor(private router: Router, private studentService: StudentsService, private notifier: NotifierService) { }

  ngOnInit() {
  }

  createHandler(value) {
    this.studentService.createStudents(value)
      .then(res => {
        this.router.navigate(['/students/all']);
        this.notifier.notify('success', 'Student created');
      });
  }
}
