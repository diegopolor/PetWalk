import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CaretakersListPageComponent } from './pages/caretakers-list/caretakers-list-page.component';;
import { LayoutComponent } from './layout/layout.component';
import { CaretakerProfilePageComponent } from './pages/caretaker-profile/caretaker-profile-page.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children : [
            {
                path: '',
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
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class TenantRouterModule {}