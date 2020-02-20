import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private db: AngularFirestore) { }

  getStudent(id) {
    return this.db.collection('students').doc(id).snapshotChanges();
  }

  getStudents() {
    return this.db.collection('students').snapshotChanges();
  }

  createStudents(value) {
    return this.db.collection('students').add({
      name: value.name,
      code: value.code,
      phone: value.phone
    });
  }

  updateStudent(id, value) {
    return this.db.collection('students').doc(id).set(value);
  }

  deleteStudent(id) {
    return this.db.collection('students').doc(id).delete();
  }
}
