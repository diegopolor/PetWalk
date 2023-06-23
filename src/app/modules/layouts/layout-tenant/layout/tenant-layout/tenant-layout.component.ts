import { Component } from '@angular/core';
import { LayoutName } from 'src/app/shared/types/layout-name.type';

@Component({
  selector: 'tenant-layout',
  templateUrl: './tenant-layout.component.html',
  styles: [
  ]
})
export class TenantLayoutComponent {
  layoutName: LayoutName = 'tenant'
}
