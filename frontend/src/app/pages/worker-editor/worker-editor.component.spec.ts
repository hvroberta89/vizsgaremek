import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerEditorComponent } from './worker-editor.component';

describe('WorkerEditorComponent', () => {
  let component: WorkerEditorComponent;
  let fixture: ComponentFixture<WorkerEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
