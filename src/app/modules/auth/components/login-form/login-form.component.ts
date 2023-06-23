import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  validCrendentials = true
  username: string = ''
  password: string = ''

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  setUsername(username: string){
    this.username = username
  }

  setPassword(pass: string){
    this.password = pass
  }

  onLogin(){
    this.validCrendentials = true
    this.authService.login(this.username, this.password)
      .subscribe(isValid => {
        this.validCrendentials = isValid
        if(!isValid) return
        this.router.navigate(['/auth/select'])
      }
    )
  }
}
