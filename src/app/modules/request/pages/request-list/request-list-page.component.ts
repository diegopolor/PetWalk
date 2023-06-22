import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Request } from 'src/app/core/models/request.interface';
import { listAllRequest } from 'src/app/states/actions/request.actions';
import { AppState } from 'src/app/states/app.state';
import { selectRequestLoading, selectRequests } from 'src/app/states/selector/request.selector';

@Component({
  selector: 'request-list-page',
  templateUrl: './request-list-page.component.html',
})
export class RequestListPageComponent {
  requests$: Observable<Request[]> = new Observable()
  loading$: Observable<boolean> = new Observable() 
  error$: Observable<boolean> = new Observable() 

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(listAllRequest())
    this.loading$ = this.store.select(selectRequestLoading)
    this.requests$ = this.store.select(selectRequests)
  }
}
