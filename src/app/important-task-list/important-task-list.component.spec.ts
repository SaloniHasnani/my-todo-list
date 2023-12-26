import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantTaskListComponent } from './important-task-list.component';

describe('ImportantTaskListComponent', () => {
  let component: ImportantTaskListComponent;
  let fixture: ComponentFixture<ImportantTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportantTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
