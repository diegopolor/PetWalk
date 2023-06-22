import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TenantRouterModule } from './caretaker-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CaretakerCardComponent } from './components/caretaker-card/caretaker-card.component';
import { ProfileImgPipe } from './pipes/profile-img.pipe';
import { CaretakerListComponent } from './components/caretaker-list/caretaker-list.component';
import { CaretakerFilterComponent } from './components/caretaker-filter/caretaker-filter.component';
import { CaretakerProfilePageComponent } from './pages/caretaker-profile-page/caretaker-profile-page.component';
import { CaretakersListPageComponent } from './pages/caretakers-list-page/caretakers-list-page.component';
import { CaretakerSortComponent } from './components/caretaker-sort/caretaker-sort.component';
import { CaretakerProfileInfoComponent } from './components/caretaker-profile-layout/caretaker-profile-info/caretaker-profile-info.component';
import { CaretakerProfileDescriptionComponent } from './components/caretaker-profile-layout/caretaker-profile-description/caretaker-profile-description.component';
import { CaretakerProfileHourlyComponent } from './components/caretaker-profile-layout/caretaker-profile-hourly/caretaker-profile-hourly.component';
import { CaretakerProfileCommentsComponent } from './components/caretaker-profile-layout/caretaker-profile-comments/caretaker-profile-comments.component';


@NgModule({
  declarations: [
    //pipes
    ProfileImgPipe,

    LayoutComponent,
    CaretakersListPageComponent,

    CaretakerCardComponent,
    CaretakerListComponent,
    CaretakerFilterComponent,
    CaretakerProfilePageComponent,
    CaretakerSortComponent,
    CaretakerProfileInfoComponent,
    CaretakerProfileDescriptionComponent,
    CaretakerProfileHourlyComponent,
    CaretakerProfileCommentsComponent
  ],
  imports: [
    CommonModule,
    TenantRouterModule,
    SharedModule
  ]
})
export class CaretakerModule { }
