import { AngularFirestore } from '@angular/fire/firestore';
import { StudentsService } from './../../students/students.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { SubjectService } from './../subject.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  items: Array<any>;
  students: Array<any>;

  constructor(private subjectService: SubjectService, private router: Router, private notifier: NotifierService, private studentService: StudentsService, private db: AngularFirestore) { }

  ngOnInit() {
    this.getData();
    this.getStudents();
  }

  getData() {
    this.subjectService.getSubjects()
      .subscribe((result) => this.items = result);
  }

  getStudents() {
    this.studentService.getStudents()
      .subscribe((result) => this.students = result);
  }

  editSubject(item) {
    this.router.navigate(['/subjects/edit/' + item.payload.doc.id]);
  }

  deleteSubject(item) {
    this.subjectService.deleteSubject(item.payload.doc.id)
      .then(res => {
        this.students.forEach(student => {
          this.db.collection('students').doc(student.payload.doc.id).collection('subjects').doc(item.payload.doc.id).delete();
        });
        this.notifier.notify('success', 'Subject deleted');
      },
        err => {
          this.notifier.notify('error', 'There was an error');
        })
  }
}
