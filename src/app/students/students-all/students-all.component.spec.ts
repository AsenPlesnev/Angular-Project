import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAllComponent } from './students-all.component';

describe('StudentsAllComponent', () => {
  let component: StudentsAllComponent;
  let fixture: ComponentFixture<StudentsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
