import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any[],arg:number=1): any {
    let noimage="assets/img/noimage.png";

    if(!value || value.length == 0){
      return noimage;
    }

    return (value.length >0) ? value[arg].url: noimage;
  }

}
