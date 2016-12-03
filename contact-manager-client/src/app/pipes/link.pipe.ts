import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'link'
})
export class LinkPipe implements PipeTransform {

  transform(value: any, scheme: string): any {
    return `${scheme}:${value}`;
  }

}
