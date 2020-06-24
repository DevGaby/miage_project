import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Cours } from '../model/cours';
import { CoursService } from '../services/cours.service';
import { Unit } from '../model/unit';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})

export class CoursComponent implements OnInit {
  myClasses: Cours[] = [];
  classForm: FormGroup;
  //showBtnInit: boolean;

  constructor(private coursService: CoursService, private formBuilder: FormBuilder) {
    this.classForm = this.formBuilder.group({
      label: '',
      period: '',
      nbHour: '',
      teacher: '',
      detail: ''
    });
  }

  ngOnInit() {
    this.myClasses = this.coursService.getCours();
  }

  deleteAll(): void {
    //this.myClasses = this.coursService.deleteAllClasses();
    this.myClasses = [];
  }

  deleteClass(id: number): void {
    const currentClasses = this.myClasses.slice(0, this.myClasses.length);
    this.myClasses = this.coursService.deleteClass(currentClasses, id);
  }

  onSubmit(): void {
    const title = this.classForm.get('label').value;
    const period = this.classForm.get('period').value;
    const nbHour = this.classForm.get('nbHour').value;
    const teacher = this.classForm.get('teacher').value;
    const description = this.classForm.get('detail').value;

    if (!title || !period || !teacher || !description || !Number.isInteger(+nbHour)) {
        alert('Vous n\'avez pas remplis tous les champs');
        return;
    }
    const form = this.classForm.value;
    const newUnity = new Unit(nbHour,'heures');
    form.id = this.myClasses.length + 1;
    form.nbHour = newUnity;
    this.myClasses.push(form);
    this.myClasses = this.myClasses.map(c => new Cours(c.id, c.label, c.period, c.nbHour, c.teacher, c.detail));
    this.clearInput();
  }

  clearInput(): void {
    this.classForm.reset();
  }

  reInitBtn(): void {
    this.deleteAll();
    this.myClasses = this.coursService.getCours();
  }
}
