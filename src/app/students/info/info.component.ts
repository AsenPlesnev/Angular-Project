import { AngularFirestore } from '@angular/fire/firestore';
import { NotifierService } from 'angular-notifier';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  student;
  counter = 1;
  subjects;
  grades = [];

  constructor(private route: ActivatedRoute, private router: Router, private notifier: NotifierService, public db: AngularFirestore) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.student = data.payload.data();
        this.student.id = data.payload.id;
        this.db.collection('students').doc(this.student.id).collection('subjects').snapshotChanges().subscribe((result) => {
          this.subjects = result;
          result.forEach(res => {
            this.db.doc(`students/${this.student.id}/subjects/${res.payload.doc.id}`).collection('grades').valueChanges()
              .subscribe((g) => this.grades.push(g));
          });
        });
      } else {
        this.router.navigate(['/']);
        this.notifier.notify('error', 'There is not a user with such a code');
      }

      console.log(...this.grades);
      console.log(this.student);
    });
  }


}
