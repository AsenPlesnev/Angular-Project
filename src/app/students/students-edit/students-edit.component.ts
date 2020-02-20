import { NotifierService } from 'angular-notifier';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from './../students.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css']
})
export class StudentsEditComponent implements OnInit {

  editForm: FormGroup;
  item: any;

  validation = {
    'name': { type: 'required', message: 'Name is required.' },
    'code': { type: 'required', message: 'Code is required.' },
    'phone': { type: 'required', message: 'Phone is required.' }
  };

  constructor(private studentsService: StudentsService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private notifier: NotifierService) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.createForm();
      }
    });
  }

  createForm() {
    this.editForm = this.fb.group({
      name: [this.item.name, Validators.required],
      code: [this.item.code, Validators.required],
      phone: [this.item.phone, Validators.required]
    });
  }

  onSubmit(value) {
    this.studentsService.updateStudent(this.item.id, value)
      .then(
        res => {
          this.router.navigate(['/students/all']);
          this.notifier.notify('success', 'Students edited');
        }
      );
  }
}
