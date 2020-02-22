import { SubjectService } from './../../subjects/subject.service';
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

  subjects: Array<any>;

  constructor(private router: Router, private studentService: StudentsService, private notifier: NotifierService, private subjectService: SubjectService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.subjectService.getSubjects()
      .subscribe((result) => this.subjects = result);
  }

  createHandler(value) {
    value.subjects = this.subjects;
    this.studentService.createStudents(value)
      .then(res => {
        let obj = {
          name: value.name,
          code: res.id,
          phone: value.phone
        }
        this.studentService.updateStudent(res.id, obj);
        value.subjects.forEach(subject => {
          res.collection('subjects').doc(subject.payload.doc.id).set({
            name: subject.payload.doc.data().name
          });
        });
        this.router.navigate(['/students/all']);
        this.notifier.notify('success', 'Student created');
      });
  }
}
