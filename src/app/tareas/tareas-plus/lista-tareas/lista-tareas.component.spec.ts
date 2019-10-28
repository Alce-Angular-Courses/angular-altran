import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTareasComponent } from './lista-tareas.component';
import { ShareModule } from 'src/app/share/share.module';
import { NewTareaComponent } from '../new-tarea/new-tarea.component';
import { TareaComponent } from '../tarea/tarea.component';
import { FormsModule } from '@angular/forms';

fdescribe('ListaTareasComponent', () => {
  let component: ListaTareasComponent;
  let fixture: ComponentFixture<ListaTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTareasComponent, NewTareaComponent, TareaComponent ],
      imports: [ ShareModule, FormsModule]
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
