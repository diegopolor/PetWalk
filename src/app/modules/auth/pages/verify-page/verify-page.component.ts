import { Component } from '@angular/core';

@Component({
  selector: 'verify-page',
  templateUrl: './verify-page.component.html',
})
export class VerifyPageComponent {
  tagsList = [
    {
      label: 'Tomar Foto Selfie',
      iconName: 'fa-id-badge'
    },
    {
      label: 'Tomar Foto de DNI',
      iconName: 'fa-id-card'
    },
    {
      label: 'Referencias personales',
      iconName: 'fa-users'
    }
  ]
}
