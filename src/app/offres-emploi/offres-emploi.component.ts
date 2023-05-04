import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/emploi';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {

  listeEmploi: Emploi[] = [];
  listeEmploiFiltree: Emploi[] = [];
  entrepriseRecherchee: string = '';

  constructor() {}

  ngOnInit(): void {
    this.listeEmploi = [
      {
        reference: 'ref1',
        titre: 'Ingénieur Cloud',
        entreprise: 'entre1',
        etat: true
      },
      {
        reference: 'ref2',
        titre: 'Ingénieur DevOps',
        entreprise: 'entre2',
        etat: false
      },
      {
        reference: 'ref3',
        titre: 'Développeur Full Stack',
        entreprise: 'entre3',
        etat: true
      }
    ]

}
public nombreOffresNonCloturees: number = 0;
public calculerBilan() {
  this.nombreOffresNonCloturees = this.listeEmploi.filter(emploi => !emploi.etat).length;
}
chercherEmploiParEntreprise(entrepriseRecherchee: string) {
  this.listeEmploiFiltree = this.listeEmploi.filter(emploi => emploi.entreprise.toLowerCase().includes(entrepriseRecherchee.toLowerCase()));
}

}
