import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingRoutingModule } from './scheduling-routing.module';
import { SchedulingListPageComponent } from './pages/scheduling-list-page/scheduling-list-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SchedulingFilterComponent } from './components/scheduling-filter/scheduling-filter.component';
import { SchedulingListComponent } from './components/scheduling-list/scheduling-list.component';
import { SchedulingCardComponent } from './components/scheduling-card/scheduling-card.component';


@NgModule({
  declarations: [
    SchedulingListPageComponent,
    SchedulingFilterComponent,
    SchedulingListComponent,
    SchedulingCardComponent,
  ],
  imports: [
    CommonModule,
    SchedulingRoutingModule,
    SharedModule
  ]
})
export class SchedulingModule { }
