import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcourseAppComponent } from './viewcourse-app.component';

describe('ViewcourseAppComponent', () => {
  let component: ViewcourseAppComponent;
  let fixture: ComponentFixture<ViewcourseAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcourseAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcourseAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
