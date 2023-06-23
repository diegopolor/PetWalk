import { Component, Input, ElementRef, HostListener } from '@angular/core';
import { NavbarItem } from '../../interfaces/navbar.interfaces';

@Component({
  selector: 'navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styles: [
  ]
})
export class NavbarMobileComponent {
  @Input() listItem: NavbarItem[] = []
  showMenu: boolean = false

  constructor( private elementRef: ElementRef){}

  @HostListener ('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showMenu = false
    }
  }


  toggleShowMenu(){
    this.showMenu = !this.showMenu
  }

}
