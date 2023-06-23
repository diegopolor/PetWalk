import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutCaretakerRoutingModule } from './layout-caretaker-routing.module';
import { CaretakerLayoutComponent } from './layout/caretaker-layout/caretaker-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CaretakerLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutCaretakerRoutingModule,
    SharedModule
  ]
})
export class LayoutCaretakerModule { }
