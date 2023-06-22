import { Component } from '@angular/core'
import { LayoutName } from 'src/app/shared/types/layout-name.type' 

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent {
  public layaoutName: LayoutName = 'tenant'
}
