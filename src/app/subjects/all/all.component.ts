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

  constructor(private subjectService: SubjectService, private router: Router, private notifier: NotifierService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.subjectService.getSubjects()
      .subscribe((result) => this.items = result);
  }

  editSubject(item) {
    this.router.navigate(['/subjects/edit/' + item.payload.doc.id]);
  }

  deleteSubject(item) {
    this.subjectService.deleteSubject(item.payload.doc.id)
      .then(res => {
        this.notifier.notify('success', 'Subject deleted');
      },
        err => {
          this.notifier.notify('error', 'There was an error');
        })
  }
}
