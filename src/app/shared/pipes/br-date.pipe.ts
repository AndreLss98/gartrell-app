import { Pipe, PipeTransform } from '@angular/core';
import { MESES } from '../consantes';

@Pipe({
  name: 'brDate'
})
export class BrDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): Date {
    const regex = new RegExp(/^[0-9]{1,2} de [a-z]{1,} de [0-9]{4}$/);
    
    if (regex.test(value)) {
      const strParts = value.split(' ');
  
      const dia = parseInt(strParts[0]);
      const mes = MESES.indexOf(strParts[2]);
      const ano = parseInt(strParts[4]);
      return new Date(ano, mes, dia, 1);
    } else {
      return new Date();
    }
  }

}
