import { Component, HostListener, ElementRef, Input, OnInit } from '@angular/core';
import { SortOptions } from 'src/app/shared/interfaces/sortOptions.intertface';

@Component({
  selector: 'btn-sort',
  templateUrl: './btn-sort.component.html',
  styles: [
  ]
})
export class BtnSortComponent implements OnInit {

  @Input() sortOptions! : SortOptions[]
  isOpenSortMenu = false

  constructor(
    private elementRef: ElementRef
  ){}

  ngOnInit(): void {
    if(!this.sortOptions) throw Error('Se debe enviar el sortOptions')
  }
  
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
