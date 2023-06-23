import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutTenantRoutingModule } from './layout-tenant-routing.module';
import { TenantLayoutComponent } from './layout/tenant-layout/tenant-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TenantLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutTenantRoutingModule,
    SharedModule
  ]
})
export class LayoutTenantModule { }
