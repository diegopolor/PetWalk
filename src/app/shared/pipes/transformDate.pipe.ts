import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform'
})
export class TransformDatePipe implements PipeTransform {
  transform(value: string): string {
    const partes = value.split('-');
    const day = partes[2];
    const month = partes[1];
    const year = partes[0];

    return `${day}/${month}/${year}`;
  }
}