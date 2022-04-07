import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolDisplay'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(boolValue: boolean) {
    return (boolValue) ? "Yes" : "No";
  }

}
