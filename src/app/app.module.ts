import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ListOffreComponent } from './list-offre/list-offre.component';
import { ListOffreService } from './services/list-offre.service';

@NgModule({
  declarations: [
    AppComponent,
    ListOffreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ListOffreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
