import { Component, Input, OnInit } from '@angular/core';
import { typeMenu } from '../../config/menuItems';

import { ModuleType } from '../../types/module-name.type';
import { NavbarItem } from '../../interfaces/navbar.interfaces';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{
  @Input() moduleUsed!: ModuleType 
  
  public menuItems!: NavbarItem[] 

  ngOnInit(): void {
    if(!this.moduleUsed){
      throw Error('Se tiene que pasar el modulo en el que se está usando el Header')
    }
    this.menuItems = typeMenu[this.moduleUsed] || []
  }
}
