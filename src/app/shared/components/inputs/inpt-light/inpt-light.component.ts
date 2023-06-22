import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'inpt-light',
  templateUrl: './inpt-light.component.html',
  styles: [
  ]
})
export class InptLightComponent {
  @Input() disabled= false
  @Input() placeholder = ''
  @Input() type = ''
  @Output() onValue = new EventEmitter<string>()

  @ViewChild('Input') inputDate! : ElementRef<HTMLInputElement> 

  valueEmmiter(){
    this.onValue.emit(this.inputDate.nativeElement.value)
  }
}
