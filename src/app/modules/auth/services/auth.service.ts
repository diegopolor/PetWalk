import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, map, of, switchMap, tap } from "rxjs";
import { User } from "src/app/core/models/user.interface";
import { environments } from "src/environments/environments";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private user?: User
    private baseUrl: string = environments.baseUrl;

    constructor(
        private http: HttpClient,
        private router: Router
        ){}

    get currentUser(){
        if ( !this.user ) return undefined
        return structuredClone( this.user )
    }

    login(username: string, password: string ){
        return this.http.get<User[]>(`${ this.baseUrl }/users?username=${username}&password=${password}`)
        .pipe(
            switchMap((users) => {
                if(users.length > 0){
                    localStorage.setItem('token', users[0].token)
                    this.user = users[0]
                    return of(true)
                }
                return of(false)
            })
        )
    }
    checkAuthentication(): Observable<boolean> {
        if ( !localStorage.getItem('token') ) return of(false);
    
        const token = localStorage.getItem('token');
        return this.http.get<User[]>(`${ this.baseUrl }/users?token=${token}`)
          .pipe(
            tap( users => this.user = users[0] ),
            map( user => user.length > 0 ),
            catchError( () => of(false) )
          );
    }

    logout() {
      this.user = undefined;
      localStorage.clear();
      this.router.navigate(['/auth/login'])
    }

}