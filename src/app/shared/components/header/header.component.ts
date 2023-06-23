import { Component, Input, OnInit } from '@angular/core';
import { typeMenu } from '../../config/menuItems';

import { LayoutName } from '../../types/layout-name.type';
import { NavbarItem } from '../../interfaces/navbar.interfaces';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{
  @Input() layoutUsed!: LayoutName 
  
  public menuItems!: NavbarItem[] 

  ngOnInit(): void {
    if(!this.layoutUsed){
      throw Error('Se tiene que pasar el modulo en el que se está usando el Header')
    }
    this.menuItems = typeMenu[this.layoutUsed] || []
  }
}
