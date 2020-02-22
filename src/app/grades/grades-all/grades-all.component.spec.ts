import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesAllComponent } from './grades-all.component';

describe('GradesAllComponent', () => {
  let component: GradesAllComponent;
  let fixture: ComponentFixture<GradesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
