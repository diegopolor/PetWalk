import { Component } from '@angular/core';
import { NavbarItem } from '../../interfaces/navbar.interfaces';

@Component({
  selector: 'shared-header-public',
  templateUrl: './header-public.component.html',
  styles: [
  ]
})
export class HeaderPublicComponent {
  publicMenuItems: NavbarItem[] = [
    {
      name: 'Ingreso',
      link: '/auth/login'
    },
    {
      name: 'Registro',
      link: '/auth/register'
    }
  ] 
}
