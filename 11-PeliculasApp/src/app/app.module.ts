import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

//routes
import { FeatureRoutingModule } from './app.routes';
import { ExcerptPipe } from './pipes/excerpt.pipe';
import { ImgMDBPipe } from './pipes/img-mdb.pipe';
import { FilmComponent } from './components/film/film.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    ExcerptPipe,
    ImgMDBPipe,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FeatureRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
