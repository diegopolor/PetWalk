import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulingListPageComponent } from './pages/scheduling-list-page/scheduling-list-page.component';

const routes: Routes = [
    {
      path: '',
      component: SchedulingListPageComponent
    },
    {
      path: '**',
      redirectTo:''
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulingRoutingModule { }
