import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'btn-logout',
  templateUrl: './btn-logout.component.html',
  styles: [
  ]
})
export class BtnLogoutComponent {

  constructor(private authService:AuthService ){}

  onLogout(){
    this.authService.logout()
  }
}
