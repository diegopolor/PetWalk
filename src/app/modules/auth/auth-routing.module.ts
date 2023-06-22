import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { WarningPageComponent } from './pages/warning-page/warning-page.component';
import { VerifyPageComponent } from './pages/verify-page/verify-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'warning',
    component: WarningPageComponent
  },
  {
    path: 'verify',
    component: VerifyPageComponent
  },
  {
    path: '**',
    redirectTo: 'login',
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
