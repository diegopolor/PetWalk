import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'warning-page',
  templateUrl: './warning-page.component.html',
})
export class WarningPageComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  onYes(){
    this.router.navigate(['/auth/verify'])
  }

  onNo(){
    this.authService.logout()
    this.router.navigate(['/auth/login'])
  }
}
