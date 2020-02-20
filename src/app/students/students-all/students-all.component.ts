import { NotifierService } from 'angular-notifier';
import { StudentsService } from './../students.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-all',
  templateUrl: './students-all.component.html',
  styleUrls: ['./students-all.component.css']
})
export class StudentsAllComponent implements OnInit {

  items: Array<any>;

  constructor(private studentService: StudentsService, private router: Router, private notifier: NotifierService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.studentService.getStudents()
      .subscribe((result) => this.items = result);
  }

  editSubject(item) {
    this.router.navigate(['/students/edit/' + item.payload.doc.id]);
  }

  deleteSubject(item) {
    this.studentService.deleteStudent(item.payload.doc.id)
      .then(res => {
        this.notifier.notify('success', 'Subject deleted');
      },
        err => {
          this.notifier.notify('error', 'There was an error');
        });
  }
}
