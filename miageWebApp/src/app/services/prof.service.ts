import { Injectable } from '@angular/core';
import { rawProfs } from '../../data/teachers-list';
import { Professeur } from '../model/prof';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  constructor() { }

  getProfs(): Professeur[] {
    rawProfs.map(p => new Professeur(p.id, p.lastname, p.firstname, p.statut, p.description));
    return rawProfs;
  }

  deleteProfs(): Professeur[] {
    const emptyList = [];
    return emptyList;
  }

  deleteProfId(oldList: Professeur[], id: number): Professeur[] {
    const idClass = oldList.findIndex(c => c.id === id);
    const newList = [];
    oldList.forEach((c, index) => {
      if (idClass !== index) {
        const prof: Professeur = new Professeur(c.id, c.lastname, c.firstname, c.statut, c.description);
        newList.push(prof);
      }
    });
    return newList;
  }

}
