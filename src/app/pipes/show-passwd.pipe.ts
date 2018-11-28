import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showPasswd'
})
export class ShowPasswdPipe implements PipeTransform {

  transform(value: string, active: boolean): string {
    let passwd = value.split('');
    if (active) {
      for (let i = 0; i < value.length ; i++) {
        passwd[i] = '*';
      }
      return passwd.join('');
    } else {
      return value;
    }
  }

}
