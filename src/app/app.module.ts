import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListOffreComponent } from './list-offre/list-offre.component';
import { ListOffreService } from './services/list-offre.service.ts';

@NgModule({
  declarations: [
    AppComponent,
    ListOffreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ListOffreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
