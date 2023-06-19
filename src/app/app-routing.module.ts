import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

import { AppComponent } from "./app.component";

const routes: Routes = [
    {
        path: 'tenant',
        loadChildren: ()=> import('./tenant/tenant.module').then(m => m.TenantModule)
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