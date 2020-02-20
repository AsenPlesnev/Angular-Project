import { NotifierService } from 'angular-notifier';
import { SubjectService } from './../subject.service';
import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  item: any;

  validation = {
    'name': { type: 'required', message: 'Name is required.' }
  };

  constructor(private subjectService: SubjectService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private notifier: NotifierService) { }

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
      name: [this.item.name, Validators.required]
    });
  }

  OnSubmit(value) {
    this.subjectService.updateSubject(this.item.id, value)
      .then(
        res => {
          this.router.navigate(['/subjects/all']);
          this.notifier.notify('success', 'Subject edited');
        }
      );
  }
}
