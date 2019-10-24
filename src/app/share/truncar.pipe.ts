import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar'
})
export class TruncarPipe implements PipeTransform {

  transform(value: string, limit: number = 10): string {
    return (value.length > limit) ? value.substr(0, limit) + '...' : value;
  }

}
