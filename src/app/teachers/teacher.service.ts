import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Teacher } from './teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private firestore: AngularFirestore) { }

  getTeachers() {
    return this.firestore.collection('teachers').snapshotChanges();
  }

  createTeacher(teacher: Teacher) {
    return this.firestore.collection('teachers').add(teacher);
  }

  updateTeacher(teacher: Teacher) {
    delete teacher.id;
    this.firestore.doc('teachers/' + teacher.id).update(teacher);
  }

  deleteTeacher(teacherId: string) {
    this.firestore.doc('teachers/' + teacherId).delete();
  }
}
