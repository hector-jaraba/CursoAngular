import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material.module'

import { AgmCoreModule } from '@agm/core';

//components
import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';



@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCscb1R7eHt56oe0rYE2i8YTPY1setxczg'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
