import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareasComponent } from './lista-tareas.component';

describe('ListaTareasComponent', () => {
  let component: ListaTareasComponent;
  let fixture: ComponentFixture<ListaTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
