import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjects: Array<any>

  constructor(private db: AngularFirestore) { }

  getSubjects() {
    return this.db.collection('subjects').snapshotChanges();
  }

  getSubject(id) {
    return this.db.collection('subjects').doc(id).snapshotChanges();
  }

  createSubject(name) {
    return this.db.collection('subjects').add({
      name
    });
  }

  updateSubject(id, value) {
    return this.db.collection('subjects').doc(id).set(value);
  }

  deleteSubject(id) {
    return this.db.collection('subjects').doc(id).delete();
  }
}
