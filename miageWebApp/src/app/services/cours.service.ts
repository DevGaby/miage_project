import { Injectable } from '@angular/core';
import { rawClasses } from '../../data/classes-list';
import { Cours } from '../model/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor() { }

  getCours(): Cours[] {
    // retournes l'ensemble des cours
    const listClasses = [];
    rawClasses.forEach(c => {
      const classe: Cours = new Cours(c.id, c.label, c.period, c.nbHour, c.teacher, c.detail);
      listClasses.push(classe);
    });
    return listClasses;
  }

  deleteAllClasses(): Cours[] {
    const emptyList = [];
    return emptyList;
  }

}
