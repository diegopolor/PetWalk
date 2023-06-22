import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from "./app.component";
import { canActivateGuard, canMatchGuard } from "./modules/auth/guards/auth.guard";

const routes: Routes = [
    {
        path: 'caretakers',
        loadChildren: ()=> import('./modules/caretaker/caretaker.module').then(m => m.CaretakerModule),
        canActivate: [ canActivateGuard ],
        canMatch : [ canMatchGuard ]
    }, 
    {
        path: 'offers',
        loadChildren: ()=> import('./modules/offers/offers.module').then(m => m.OffersModule)
    },
    {
        path: 'request',
        loadChildren: ()=> import('./modules/request/request.module').then(m => m.RequestModule)
    },
    {
        path: 'scheduling',
        loadChildren: ()=> import('./modules/scheduling/scheduling.module').then(m => m.SchedulingModule)
    },
    {
        path: 'auth',
        loadChildren: ()=> import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path : '',
        component: AppComponent
    }
]

@NgModule({
    imports : [  RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}