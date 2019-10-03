import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(dateString: any): any {

    if(!dateString){
      return '';
    }
    var timestamp = Date.parse(dateString);

    if (isNaN(timestamp) == false) {
      const date = new Date(dateString);
      return date.toLocaleDateString('pl-pl', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
    return '';

  }

}
