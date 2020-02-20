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

  constructor(private subjectService: SubjectService, private router: Router, private notifier: NotifierService) { }

  ngOnInit() {
  }


  createHandler(data) {
    this.subjectService.createSubject(data.name)
      .then(res => {
        this.router.navigate(['/subjects/all']);
        this.notifier.notify('success', 'Subject successfully created.');
      },
        err => {
          this.notifier.notify('error', err.message);
        }
      );
  }
}
