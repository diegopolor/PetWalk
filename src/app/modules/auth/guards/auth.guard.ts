import { Injectable, inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { tap, Observable, take } from 'rxjs';
import { AuthService } from '../services/auth.service';
 
@Injectable({providedIn: 'root'})
 
export class AuthGuard {
}
 
const isAuthenticated = (): boolean  | Observable<boolean>  => {
    
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.checkAuthentication().pipe(
      take(1),
      tap((isAuthenticated: boolean) => {
          if (!isAuthenticated) {
              router.navigate(['/auth']);
          }
      })
  );
}
 
export const canActivateGuard:CanActivateFn = isAuthenticated;
export const canMatchGuard:CanMatchFn = isAuthenticated;