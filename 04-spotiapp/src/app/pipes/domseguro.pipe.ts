import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }

  transform( value: string, url: string = "https://open.spotify.com/embed?uri="): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
