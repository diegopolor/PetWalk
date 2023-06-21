import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filterByName, listAllCaretakers } from 'src/app/states/actions/caretakers.actions';

@Component({
  selector: 'caretaker-filter',
  templateUrl: './caretaker-filter.component.html',
})
export class CaretakerFilterComponent {

  constructor(private store: Store){}

  resetData(){
    this.store.dispatch(listAllCaretakers())
  }

  findByName(name: string){
    this.store.dispatch(filterByName({ name }))
  }
}
