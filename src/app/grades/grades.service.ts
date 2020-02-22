import { SubjectService } from './../subjects/subject.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { StudentsService } from '../students/students.service';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  constructor(private db: AngularFirestore, private studentService: StudentsService, private subjectService: SubjectService) { }

  createGrade(value) {
    let studentRef = this.db.collection('students').doc(value.student);

    this.db.collection('grades').add({
      grade: value.grade,
      subject: value.subject
    });

    return studentRef.collection('subjects').doc(value.subject).collection('grades').add({
      grade: value.grade
    });
  }
}
