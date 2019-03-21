import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string, limitWords: number = 20): string {
    let words = value.split(" ");
    let result: string = "";
    for(let i = 0; i< limitWords; i++)
    {
      result += words[i] + " ";
    } 
    result += "...";
    return result;
  }

}
