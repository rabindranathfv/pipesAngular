import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'specialPipe'
})
export class specialPipe implements PipeTransform {
    transform(value: any): any {
        let val = value.trim().toLowerCase();
        let valArr = val.split(' ');
        valArr.forEach( (elem, index) => {
            valArr[index] = elem.charAt(0).toUpperCase() + elem.slice(1);
        });
        // console.log(valArr.join(' '));
        return valArr.join(' ');
    }
}