import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasSimpleComponent } from './tareas-simple.component';

describe('TareasSimpleComponent', () => {
  let component: TareasSimpleComponent;
  let fixture: ComponentFixture<TareasSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
