import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

import { AppComponent } from "./app.component";

const routes: Routes = [
    {
        path: 'caretakers',
        loadChildren: ()=> import('./modules/caretaker/caretaker.module').then(m => m.CaretakerModule)
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
        path : '',
        component: AppComponent
    }
]

@NgModule({
    imports : [  RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}