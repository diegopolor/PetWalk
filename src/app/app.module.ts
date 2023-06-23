import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ROOT_REDUCERS } from './states/app.state';
import { CaretakerEffect } from './states/effects/caretaker.effects';
import { OfferEffect } from './states/effects/offer.effects';
import { SchedulingEffect } from './states/effects/schedulingList.effects';
import { RequestEffect } from './states/effects/request.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'Debug' }),
    EffectsModule.forRoot([CaretakerEffect, OfferEffect, SchedulingEffect, RequestEffect]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
