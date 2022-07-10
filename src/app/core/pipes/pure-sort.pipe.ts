import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureSort'
})
export class PureSortPipe implements PipeTransform {

  transform(array: number[], ...args: any[]): any {
    return array.slice().sort((a, b) => b - a);
  }

}
