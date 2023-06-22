import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Scheduling } from 'src/app/core/models/scheduling.interface';
import { listAllScheduling } from 'src/app/states/actions/scheduling.actions';
import { AppState } from 'src/app/states/app.state';
import { selectSchedulingLoading, selectSchedulings } from 'src/app/states/selector/scheduling.selector';

@Component({
  selector: 'scheduling-list-page',
  templateUrl: './scheduling-list-page.component.html',
})
export class SchedulingListPageComponent {
  schedulings$: Observable<Scheduling[]> = new Observable()
  loading$: Observable<boolean> = new Observable() 
  error$: Observable<boolean> = new Observable() 

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(listAllScheduling())
    this.loading$ = this.store.select(selectSchedulingLoading)
    this.schedulings$ = this.store.select(selectSchedulings)
  }
}
