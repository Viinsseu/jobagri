import { Component, OnInit } from '@angular/core';
import { ListOffreService } from '../services/list-offre.service';
import { Offre } from '../models/offre.model';

@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.scss']
})
export class ListOffreComponent implements OnInit {

  offres: Offre[];

  constructor(private listoffre: ListOffreService) { }

  ngOnInit() {
    this.listoffre.getOffres().subscribe(
      (data: Offre[]) => {
        this.offres = data;
      },
      (error) => {
        console.log('Erreur lecture offres : ' + error);
      }
    );

    // console.log(this.offres[0]);
  }

}
