import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'workshop'
})
export class WorkshopPipe implements PipeTransform {

  transform(value:string,na:string): any {
    return '<div>' + na +'</div>';
  }
  
}
