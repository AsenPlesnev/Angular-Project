import { AngularFirestore } from '@angular/fire/firestore';
import { StudentsService } from './../../students/students.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { SubjectService } from './../subject.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  students: Array<any>;

  constructor(private subjectService: SubjectService, private router: Router, private notifier: NotifierService, private studentService: StudentsService, private db: AngularFirestore) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.studentService.getStudents()
      .subscribe((result) => this.students = result);
  }


  createHandler(data) {
    this.subjectService.createSubject(data.name)
      .then(res => {
        this.students.forEach(student => {
          this.db.collection('students').doc(student.payload.doc.id).collection('subjects').doc(res.id).set({
            subject: data.name
          });
        });
        this.router.navigate(['/subjects/all']);
        this.notifier.notify('success', 'Subject successfully created.');
      },
        err => {
          this.notifier.notify('error', err.message);
        }
      );
  }
}
