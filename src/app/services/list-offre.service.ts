import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from '../models/offre.model';

@Injectable()
export class ListOffreService {

  constructor(public httpClient: HttpClient) {
  }

  getOffres() {
    return  this.httpClient.get<Offre[]>('https://jobagri.com/modules/app/getOffers.php');
    // return  this.httpClient.get<Offre[]>('https://jobagri.com/modules/app/test.php');
  }

}
