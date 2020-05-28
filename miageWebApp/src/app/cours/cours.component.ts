import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Cours } from '../model/cours';
import { CoursService } from '../services/cours.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})

export class CoursComponent implements OnInit {
  myClasses: Cours[] = [];
  addClassForm: FormGroup;

  constructor(private coursService: CoursService, private formBuilder: FormBuilder) {
    this.addClassForm = this.formBuilder.group({
      titleInput: '',
      periodInput: '',
      nbHourInput: '',
      teacherInput: '',
      descriptionInput: ''
    });
  }

  ngOnInit() {
    this.myClasses = this.coursService.getCours();
  }

  deleteAll(): void {
    this.myClasses = this.coursService.deleteAllClasses();
    this.showReInitButton();
  }

  deleteClass(id: number): void {
    const currentClasses = this.myClasses.slice(0, this.myClasses.length);
    this.myClasses = this.coursService.deleteClass(currentClasses, id);
    this.showReInitButton();
  }

  onSubmit(newClasse: any): void {
    const title = (document.getElementById('titleInput') as HTMLInputElement).value;
    const period = (document.getElementById('periodInput') as HTMLInputElement).value;
    const nbHour = (document.getElementById('nbHourInput') as HTMLInputElement).value;
    const teacher = (document.getElementById('teacherInput') as HTMLInputElement).value;
    const description = (document.getElementById('descriptionInput') as HTMLInputElement).value;

    if (!title || !period || !teacher || !description || !Number.isInteger(+nbHour)) {
        alert('Vous n\'avez pas remplis tous les champs');
        return;
    }
    const currentClasses = this.myClasses.slice(0, this.myClasses.length);
    this.myClasses = this.coursService.postClasse(currentClasses, newClasse);
    this.clearInput(['titleInput', 'periodInput', 'nbHourInput', 'teacherInput', 'descriptionInput']);
  }

  clearInput(list){
    for (let i = 0; i < list.length; i++) {
      (document.getElementById(list[i])as HTMLInputElement).value = '';
    }
}

  reInitBtn(): void {
    this.deleteAll();
    this.ngOnInit();
    (document.getElementById('reInitBtn') as HTMLInputElement).style.display = 'none';
  }

  showReInitButton() {
    (document.getElementById('reInitBtn') as HTMLInputElement).style.display = 'initial';
}

}
