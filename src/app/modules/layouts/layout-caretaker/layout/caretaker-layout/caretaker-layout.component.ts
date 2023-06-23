import { Component } from '@angular/core';
import { LayoutName } from 'src/app/shared/types/layout-name.type';

@Component({
  selector: 'app-caretaker-layout',
  templateUrl: './caretaker-layout.component.html',
  styles: [
  ]
})
export class CaretakerLayoutComponent {
  layoutName: LayoutName = 'caretakers'
}
