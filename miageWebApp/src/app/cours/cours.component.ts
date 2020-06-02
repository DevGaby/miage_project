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
  show: boolean;

  constructor(private coursService: CoursService, private formBuilder: FormBuilder) {
    this.addClassForm = this.formBuilder.group({
      label: '',
      period: '',
      nbHour: '',
      teacher: '',
      detail: ''
    });
  }

  ngOnInit() {
    this.myClasses = this.coursService.getCours();
    this.show = false;
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

  onSubmit(newClasse: Cours): void {
    const title = this.addClassForm.get('label').value;
    const period = this.addClassForm.get('period').value;
    const nbHour = this.addClassForm.get('nbHour').value;
    const teacher = this.addClassForm.get('teacher').value;
    const description = this.addClassForm.get('detail').value;

    if (!title || !period || !teacher || !description || !Number.isInteger(+nbHour)) {
        alert('Vous n\'avez pas remplis tous les champs');
        return;
    }
    //const currentClasses = this.myClasses.slice(0, this.myClasses.length);
    //this.myClasses = this.coursService.postClasse(currentClasses, newClasse);
    newClasse.id = this.myClasses.length +1;
    this.myClasses.push(newClasse);
    this.clearInput();
  }

  clearInput(): void {
    this.addClassForm.reset();
  }

  reInitBtn(): void {
    this.deleteAll();
    this.myClasses = this.coursService.getCours();
    (document.getElementById('reInitBtn') as HTMLInputElement).style.display = 'none';
  }

  showReInitButton() {
    (document.getElementById('reInitBtn') as HTMLInputElement).style.display = 'initial';
  }


}
