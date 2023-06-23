import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaretakerLayoutComponent } from './layout/caretaker-layout/caretaker-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CaretakerLayoutComponent,
    children: [
      {
        path: 'offers',
        loadChildren: ()=> import('../../offers/offers.module').then(m => m.OffersModule)
      },
      {
        path: 'requests',
        loadChildren: ()=> import('../../request/request.module').then(m => m.RequestModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'offers'
      },
      {
        path: '**',
        redirectTo: 'offers'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutCaretakerRoutingModule { }
