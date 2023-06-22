import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'inpt-number',
  templateUrl: './inpt-number.component.html'
})
export class InptNumberComponent {

  private regex = /^\d+(\.\d+)?$/

  value: string = ''

  @Input() disabled = false
  @Input() placeholder = ''
  @Output() onValue = new EventEmitter<string>()

  @ViewChild('InputNumber') inputNumber! : ElementRef<HTMLInputElement> 
  
  /**
  * Función para verificar y obtener el valor del campo de entrada numérica.
  * @returns El valor numérico ingresado o '0' si no es válido.
  */
  verifyInput(): string{
    const inputValue = this.inputNumber.nativeElement.value

    if(this.regex.test(inputValue)){
      this.inputNumber.nativeElement.value = inputValue
      return inputValue
    }

    this.inputNumber.nativeElement.value = ''
    return '0'
  }

  valueEmmiter(){
      this.onValue.emit(this.verifyInput())
  }
  
  

  

}
