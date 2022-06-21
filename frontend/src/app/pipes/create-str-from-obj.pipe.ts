import { Pipe, PipeTransform } from '@angular/core';
import { get } from 'lodash';

@Pipe({
  name: 'createStrFromObj'
})
export class CreateStrFromObjPipe implements PipeTransform {

  transform(obj: any, ...keys: string[]): string | number | boolean | undefined {
    return keys.map( key => get(obj, key) ).join(', ');
  }

}
