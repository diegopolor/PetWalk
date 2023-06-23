import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { canActivateGuard, canMatchGuard } from './modules/auth/guards/auth.guard';
import { canActivatePublic, canMatchPublic } from './modules/auth/guards/public.guard';

const routes: Routes = [
    {
        path: 'public',
        loadChildren: ()=> import('./modules/home/home.module').then(m => m.HomeModule),
        canActivate: [  canActivatePublic ],
        canMatch: [ canMatchPublic ]
    },
    {
        path: 'auth',
        loadChildren: ()=> import('./modules/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path : 'tenantLayout',
        loadChildren: ()=> import('./modules/layouts/layout-tenant/layout-tenant.module').then(m => m.LayoutTenantModule),
        canActivate: [ canActivateGuard ],
        canMatch: [  canMatchGuard ]
    },
    {
        path : 'caretakerLayout',
        loadChildren: ()=> import('./modules/layouts/layout-caretaker/layout-caretaker.module').then(m => m.LayoutCaretakerModule),
        canActivate: [ canActivateGuard ],
        canMatch: [  canMatchGuard ]
    },
    {
        path: '**',
        redirectTo: 'public'
    }
]

@NgModule({
    imports : [  RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}