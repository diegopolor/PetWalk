import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-primary',
  templateUrl: './btn-primary.component.html',
  styles: [
  ]
})
export class BtnPrimaryComponent {
  @Input() text!: string
  @Input() type = 'button' 

  ngOnInit(): void {
    if(!this.text) throw Error('Se le debe asignar un texto al botón')
  }
}
