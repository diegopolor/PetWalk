import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'btn-ghost',
  templateUrl: './btn-ghost.component.html',
  styles: [
  ]
})
export class BtnGhostComponent implements OnInit {
  @Input() text!: string

  ngOnInit(): void {
    if(!this.text) throw Error('Se le debe asignar un texto al botón')
  }
}
