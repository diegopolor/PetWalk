import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-verify',
  templateUrl: './btn-verify.component.html',
  styles: [
  ]
})
export class BtnVerifyComponent {
  @Input() text = ''
  @Input() iconName = ''
}
