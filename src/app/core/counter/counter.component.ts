import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'alt-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counterValue$: Observable<any>;
  counterValue: number;

  constructor(public store: Store<AppState>) {
  this.counterValue$ = this.store.select('counter')
  this.store.select('counter').subscribe(
    (data) => { this.counterValue = data; }
  )

  }

  ngOnInit() {
  }

}
