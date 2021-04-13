import { Pipe, PipeTransform } from '@angular/core';
import { MESES } from '../consantes';

@Pipe({
  name: 'brDate'
})
export class BrDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): Date {
    const date1Regex = new RegExp(/^[0-9]{1,2} de [a-z]{1,} de [0-9]{4}$/);
    const date2Regex = new RegExp(/^([0-9]{2}\/){2}[0-9]{4}/);
    
    if (date1Regex.test(value)) {
      const strParts = value.split(' ');
  
      const dia = parseInt(strParts[0]);
      const mes = MESES.indexOf(strParts[2]);
      const ano = parseInt(strParts[4]);
      return new Date(ano, mes, dia, 1);

    } else if(date2Regex.test(value)) {
      const strParts = value.split('/');
      
      const dia = parseInt(strParts[0]);
      const mes = parseInt(strParts[1]) - 1;
      const ano = parseInt(strParts[2]);

      return new Date(ano, mes, dia, 1);
    } else {
      return new Date();
    }
  }

}
