import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlFilter'
})
export class HtmlFilterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    value = value
      .replace(/(?:<a.{1,}\/a>)/g, "")
      .replace(/\&nbsp\;/g, '<br/>');
    return value;
  }

}
