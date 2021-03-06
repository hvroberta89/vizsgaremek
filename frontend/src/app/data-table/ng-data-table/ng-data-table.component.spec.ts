import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDataTableComponent } from './ng-data-table.component';

describe('NgDataTableComponent', () => {
  let component: NgDataTableComponent;
  let fixture: ComponentFixture<NgDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
