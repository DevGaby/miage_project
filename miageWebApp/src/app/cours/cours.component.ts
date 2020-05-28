import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Cours } from '../model/cours';
import { CoursService } from '../services/cours.service';

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
  }

  deleteClass(id: number): void {
    const currentClasses = this.myClasses.slice(0, this.myClasses.length);
    this.myClasses = this.coursService.deleteClass(currentClasses, id);
  }

  onSubmit(newClasse: any): void {
    const title = (<HTMLInputElement>document.getElementById('titleInput')).value;
    const period = (<HTMLInputElement>document.getElementById('periodInput')).value;
    const nbHour = (<HTMLInputElement>document.getElementById('nbHourInput')).value;
    const teacher = (<HTMLInputElement>document.getElementById('teacherInput')).value;
    const description = (<HTMLInputElement>document.getElementById('descriptionInput')).value;

    if (!title || !period || !teacher || !description || !Number.isInteger(+nbHour)) {
        alert('Vous n\'avez pas remplis tous les champs');
        return;
    }
    const currentClasses = this.myClasses.slice(0, this.myClasses.length);
    this.myClasses = this.coursService.postClasse(currentClasses, newClasse);
  }

}
