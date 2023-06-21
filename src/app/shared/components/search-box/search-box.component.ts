import { Component, ElementRef, ViewChild, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
  @ViewChild('searchInput') searchInput! : ElementRef<HTMLInputElement> 
  @Output() onValue = new EventEmitter<string>()

  valueEmmiter(){
    this.onValue.emit(this.searchInput.nativeElement.value)
    this.searchInput.nativeElement.value = ''
  }
}
