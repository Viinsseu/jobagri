import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListOffreComponent } from './list-offre/list-offre.component';
import { listOffreService } from './services/list-offre.services';

@NgModule({
  declarations: [
    AppComponent,
    ListOffreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    listOffreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
