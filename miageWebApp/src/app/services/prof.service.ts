import { Injectable } from '@angular/core';
import { rawProfs } from '../../data/teachers-list';
import { Professeur } from '../model/prof';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  constructor() { }

  getProfs(): Professeur[]{
    rawProfs.map(p => new Professeur(p.id, p.lastname, p.firstname, p.statut, p.description));
    return rawProfs;
  }
}
