import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersListPageComponent } from './pages/offers-list-page/offers-list-page.component';
import { OffersCreatePageComponent } from './pages/offers-create-page/offers-create-page.component';
import { offersRoutingModule } from './offers-routing.module';
import { OffersPageComponent } from './pages/offers-page/offers-page.component';
import { OffersFilterComponent } from './components/offers-filter/offers-filter.component';
import { OffersSortComponent } from './components/offers-sort/offers-sort.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OffersCardComponent } from './components/offers-card/offers-card.component';
import { OfferDescriptionComponent } from './components/offer-layout/offer-description/offer-description.component';
import { OfferDetailsComponent } from './components/offer-layout/offer-details/offer-details.component';
import { OfferInfoComponent } from './components/offer-layout/offer-info/offer-info.component';
import { OffersYoursListComponent } from './components/offers-yours-list/offers-yours-list.component';
import { OffersYoursCardComponent } from './components/offers-yours-card/offers-yours-card.component';
import { OffersFormComponent } from './components/offers-form/offers-form.component';

@NgModule({
  declarations: [
    OffersListPageComponent,
    OffersCreatePageComponent,
    OffersPageComponent,

    OffersFilterComponent,
     OffersSortComponent,
     OffersCardComponent,
     OfferDescriptionComponent,
     OfferDetailsComponent,
     OfferInfoComponent,
     OffersYoursListComponent,
     OffersYoursCardComponent,
     OffersFormComponent,
  ],
  imports: [
    CommonModule,
    offersRoutingModule,
    SharedModule
  ]
})
export class OffersModule { }
