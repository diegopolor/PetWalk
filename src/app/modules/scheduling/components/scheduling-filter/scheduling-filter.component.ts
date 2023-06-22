import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { filterByCaretakerScheduling, filterByDateScheduling, listAllScheduling } from 'src/app/states/actions/scheduling.actions';
import { Scheduling } from 'src/app/core/models/scheduling.interface';

@Component({
  selector: 'scheduling-filter',
  templateUrl: './scheduling-filter.component.html',
})
export class SchedulingFilterComponent {
  @Input() schedulings$: Observable<Scheduling[]> = new Observable()
  @ViewChild('SelectPet') selectCaretaker! : ElementRef<HTMLSelectElement> 

  caretakerSelected = ''
  date = ''

  constructor(private store: Store){}

  filterByCaretaker(){
    this.caretakerSelected = this.selectCaretaker.nativeElement.value
    this.store.dispatch(filterByCaretakerScheduling({caretakerName: this.caretakerSelected }))
  }

  filterByDate(date: string){
    this.store.dispatch(filterByDateScheduling({ date }))
  }

  resetData(){
    this.store.dispatch(listAllScheduling())
    this.caretakerSelected = this.selectCaretaker.nativeElement.value = ''
  }

}
