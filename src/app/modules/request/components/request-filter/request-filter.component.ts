import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from 'src/app/core/models/request.interface';
import { Store } from '@ngrx/store';
import { filterByDateRequest, filterByPetNameRequest, listAllRequest } from 'src/app/states/actions/request.actions';

@Component({
  selector: 'request-filter',
  templateUrl: './request-filter.component.html',
})
export class RequestFilterComponent {
  @Input() requests$: Observable<Request[]> = new Observable()
  @ViewChild('SelectPet') selectPet! : ElementRef<HTMLSelectElement> 

  petSelected = ''
  date = ''

  constructor(private store: Store){}

  filterbyPet(){
    this.petSelected = this.selectPet.nativeElement.value
    this.store.dispatch(filterByPetNameRequest({petName: this.petSelected }))
  }

  filterByDate(date: string){
    this.store.dispatch(filterByDateRequest({ date }))
  }

  resetData(){
    this.store.dispatch(listAllRequest())
    this.petSelected = this.selectPet.nativeElement.value = ''
  }

}
