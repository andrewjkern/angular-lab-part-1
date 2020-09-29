import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  transform(date): string {
    console.log('custom pipe', date);
    return `${date}, I have been piped`;
  }
}
