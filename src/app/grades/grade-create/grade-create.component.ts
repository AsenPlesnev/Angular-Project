import { SubjectService } from './../../subjects/subject.service';
import { NotifierService } from 'angular-notifier';
import { Router, ActivatedRoute } from '@angular/router';
import { GradesService } from './../grades.service';
import { StudentsService } from './../../students/students.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-grade-create',
  templateUrl: './grade-create.component.html',
  styleUrls: ['./grade-create.component.css']
})
export class GradeCreateComponent implements OnInit {

  createForm: FormGroup;
  items: Array<any>;
  student: any;
  subjects: Array<any>;

  constructor(private fb: FormBuilder, private studentsService: StudentsService, private gradesService: GradesService, private router: Router,
    private subjectService: SubjectService, private notifier: NotifierService, private route: ActivatedRoute) {
    this.createForm = this.fb.group({
      gradeValues: [''],
      studentsControl: ['']
    });
  }

  ngOnInit() {
    this.getStudents();
    this.getSubjects();

    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.student = data.payload.data();
        this.student.id = data.payload.id;
      }
    });

    console.log(this.student);
  }

  getStudents() {
    this.studentsService.getStudents()
      .subscribe((result) => this.items = result);
  }

  getSubjects() {
    this.subjectService.getSubjects()
      .subscribe((result) => this.subjects = result);
  }

  submit(value) {
    value.student = this.student.id;
    this.gradesService.createGrade(value)
      .then(res => {
        this.router.navigate(['/students/all']);
        this.notifier.notify('success', 'Grade created successfully.');
      })
      .catch(err => {
        this.notifier.notify('error', err.message);
      });

  }
}
