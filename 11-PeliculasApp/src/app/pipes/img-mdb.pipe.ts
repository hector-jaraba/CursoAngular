import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgMDB'
})
export class ImgMDBPipe implements PipeTransform {

  urlIMG: string = "https://image.tmdb.org/t/p/w500/";

  transform(value: string): string {
    return (this.urlIMG+value);
  }

}
