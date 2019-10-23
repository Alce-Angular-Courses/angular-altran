import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTareaComponent } from './new-tarea.component';

describe('NewTareaComponent', () => {
  let component: NewTareaComponent;
  let fixture: ComponentFixture<NewTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
