import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { WarningPageComponent } from './pages/warning-page/warning-page.component';
import { VerifyPageComponent } from './pages/verify-page/verify-page.component';
import { LayoutComponent } from './layout/layout.component';
import { SelectLayoutComponent } from './pages/select-layout/select-layout.component';
import { canActivatePublic, canMatchPublic } from './guards/public.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
        canActivate: [ canActivatePublic ],
        canMatch: [  canMatchPublic ]
      },
      {
        path: 'register',
        component: RegisterPageComponent,
        canActivate: [ canActivatePublic ],
        canMatch: [  canMatchPublic ]
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
        path: 'select',
        component: SelectLayoutComponent
      },
      {
        path: '**',
        redirectTo: 'login',
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
