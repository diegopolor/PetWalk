import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

import { AppComponent } from "./app.component";

const routes: Routes = [
    {
        path: 'caretakers',
        loadChildren: ()=> import('./modules/caretaker/caretaker.module').then(m => m.CaretakerModule)
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