import { Component, Input } from '@angular/core';
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

  toggleShowMenu(){
    this.showMenu = !this.showMenu
  }

}
