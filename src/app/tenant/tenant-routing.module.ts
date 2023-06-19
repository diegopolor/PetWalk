import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CaretakersListComponent } from './pages/caretakers-list/caretakers-list.component';
import { SchedulingListComponent } from './pages/scheduling-list/scheduling-list.component';
import { CreateOffersComponent } from './pages/create-offers/create-offers.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children : [
            {
                path: 'caretakers-list',
                component: CaretakersListComponent
            },
            {
                path: 'scheduling-list',
                component: SchedulingListComponent
            },
            {
                path: 'create-offers',
                component: CreateOffersComponent
            },
            {
                path: '**',
                redirectTo: 'caretakers-list'
            }
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class TenantRouterModule {}