import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showPasswd'
})
export class ShowPasswdPipe implements PipeTransform {
  // transform passd to ***
  transform(value: string, active: boolean = true): string {
    return (active) ? value.replace(/\W|_|\w/gi, '*') : value;
  }

}
