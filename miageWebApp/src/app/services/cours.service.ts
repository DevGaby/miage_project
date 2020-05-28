import { Injectable } from '@angular/core';
import { rawClasses } from '../../data/classes-list';
import { Cours } from '../model/cours';
import { Unit } from '../model/unit';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor() { }

  getCours(): Cours[] {
    // retournes l'ensemble des cours
    // const listClasses = [];
    // rawClasses.forEach(c =>
    //   const classe: Cours = new Cours(c.id, c.label, c.period, c.nbHour, c.teacher, c.detail);
    //   listClasses.push(classe);
    // });
    // return listClasses;
    rawClasses.map(c => new Cours(c.id, c.label, c.period, c.nbHour, c.teacher, c.detail));
    return rawClasses;
  }

  deleteAllClasses(): Cours[] {
    const emptyList = [];
    return emptyList;
  }

  deleteClass(oldClasses: Cours[], id: number): Cours[] {
    const idClass = oldClasses.findIndex(c => c.id === id);
    const newList = [];
    oldClasses.forEach((c, index) => {
      if (idClass !== index) {
        const classe: Cours = new Cours(c.id, c.label, c.period, c.nbHour, c.teacher, c.detail);
        newList.push(classe);
      }
    });
    // J'ai voulu utiliser splice comme suit mais ca n'a pas marcher
    // oldClasses.splice(idClass, 0);
    return newList;
  }

  postClasse(oldClasses: Cours[], newClasses: any): Cours[] {
    const hour = new Unit(newClasses.nbHourInput, 'heures');
    oldClasses.map(c => new Cours(c.id, c.label, c.period, c.nbHour, c.teacher, c.detail));
    newClasses = new Cours((oldClasses.length + 1), newClasses.titleInput, newClasses.periodInput, hour, newClasses.teacherInput, newClasses.descriptionInput);
    oldClasses.push(newClasses);
    console.log(oldClasses);
    // La méthode fonctionne mais ca me creer un tableau cours dans mon tableau Cous existant pkoi?
    return oldClasses;
  }
}
