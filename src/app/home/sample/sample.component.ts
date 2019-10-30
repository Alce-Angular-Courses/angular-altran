import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { IncrementAction, DecrementAction } from 'src/app/reducers/counter.actions';

@Component({
  selector: 'alt-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  title: string;
  constructor(public store: Store<AppState> ) { }

  ngOnInit() {
    this.title = environment.titulo;
  }

  onButton(id) {
    if (id === 1) {
      // incrementar
      const action = new IncrementAction();
      this.store.dispatch(action)

    } else if (id === -1) {
      // decrementar
      const action = new DecrementAction();
      this.store.dispatch(action)
    }
  }

}
