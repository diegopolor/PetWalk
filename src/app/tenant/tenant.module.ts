import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaretakersListComponent } from './pages/caretakers-list/caretakers-list.component';
import { SchedulingListComponent } from './pages/scheduling-list/scheduling-list.component';
import { CreateOffersComponent } from './pages/create-offers/create-offers.component';
import { TenantRouterModule } from './tenant-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { CaretakerCardComponent } from './components/caretaker-card/caretaker-card.component';
import { ProfileImgPipe } from './pipes/profile-img.pipe';

@NgModule({
  declarations: [
    CaretakersListComponent,
    SchedulingListComponent,
    CreateOffersComponent,
    LayoutComponent,
    CaretakerCardComponent,

    ProfileImgPipe
  ],
  imports: [
    CommonModule,
    TenantRouterModule,
    SharedModule
  ]
})
export class TenantModule { }
