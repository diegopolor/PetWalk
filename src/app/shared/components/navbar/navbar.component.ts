import { Component, Input, OnInit } from '@angular/core';
import { NavbarItem } from '../../interfaces/navbar.interfaces';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit{
  @Input() listItem: NavbarItem[] = []

  ngOnInit(): void {
    if(this.listItem.length < 1) throw Error('El navbar debe tener al menos 1 item')
  }

}
