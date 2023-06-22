import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListPageComponent } from './pages/request-list/request-list-page.component';
import { RequestCardComponent } from './components/request-card/request-card.component';
import { RequestFilterComponent } from './components/request-filter/request-filter.component';
import { RequestRoutingModule } from './request-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RequestListComponent } from './components/request-list/request-list.component';

@NgModule({
  declarations: [
    RequestListPageComponent,
    RequestCardComponent,
    RequestFilterComponent,
    RequestListComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    SharedModule
  ]
})
export class RequestModule { }
