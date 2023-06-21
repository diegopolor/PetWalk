import { Component, ElementRef, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { SortOptions } from 'src/app/shared/interfaces/sortOptions.intertface';
import { sortAZCaretakers, sortByHighestStars, sortByLowestStars, sortZACaretakers } from 'src/app/states/actions/caretakers.actions';

@Component({
  selector: 'caretaker-sort',
  templateUrl: './caretaker-sort.component.html'
})
export class CaretakerSortComponent {
  
  sortOptions: SortOptions[] = [
    {
        name: 'Ordenar de la A a la Z',
        iconName: 'fa-sort-alpha-down',
        onClic: () => this.store.dispatch(sortAZCaretakers())
    },
    {
        name: 'Ordenar de la Z a la A',
        iconName: 'fa-sort-alpha-down-alt',
        onClic: ()=> this.store.dispatch(sortZACaretakers())
    },
    {
        name: 'Ordenar por mas estrellas',
        iconName: 'fa-star',
        onClic: () => this.store.dispatch(sortByHighestStars())
    },
    {
        name: 'Ordenar por menos estrellas',
        iconName: 'fa-star',
        onClic:() => this.store.dispatch(sortByLowestStars())
    }
  ]

  isOpenSortMenu = false

  constructor(
    private store: Store,
    private elementRef: ElementRef
  ){}
  
  @HostListener ('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpenSortMenu = false
    }
  }

  toggleSortMenu(){
    this.isOpenSortMenu = !this.isOpenSortMenu
  }
}
