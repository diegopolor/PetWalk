import { Component } from '@angular/core'
import { ModuleType } from 'src/app/shared/types/module-name.type' 

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent {
  public layaoutName: ModuleType = 'tenant'
}
