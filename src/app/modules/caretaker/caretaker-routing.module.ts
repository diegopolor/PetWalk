import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CaretakersListPageComponent } from './pages/caretakers-list-page/caretakers-list-page.component';;
import { CaretakerProfilePageComponent } from './pages/caretaker-profile-page/caretaker-profile-page.component';


const routes: Routes = [
    {     
        path: '',
        pathMatch: 'full',
        component: CaretakersListPageComponent
    },
    {
        path: ':id',
        component: CaretakerProfilePageComponent
    },
    {
        path: '**',
        redirectTo: ''    
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class TenantRouterModule {}