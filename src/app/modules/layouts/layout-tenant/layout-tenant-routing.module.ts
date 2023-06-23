import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantLayoutComponent } from './layout/tenant-layout/tenant-layout.component';

const routes: Routes = [
  {
    path: '',
    component: TenantLayoutComponent,
    children: [
      {
        path: 'caretakers',
        loadChildren: ()=> import('../../caretaker/caretaker.module').then(m => m.CaretakerModule)
      },
      {
        path: 'schedulings',
        loadChildren: ()=> import('../../scheduling/scheduling.module').then(m => m.SchedulingModule)
      },
      {
        path: 'offers',
        loadChildren: ()=> import('../../offers/offers.module').then(m => m.OffersModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'caretakers'
      },
      {
        path: '**',
        redirectTo: 'caretakers'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutTenantRoutingModule { }
