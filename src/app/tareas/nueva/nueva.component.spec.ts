import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaComponent } from './nueva.component';

describe('NuevaComponent', () => {
  let component: NuevaComponent;
  let fixture: ComponentFixture<NuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
