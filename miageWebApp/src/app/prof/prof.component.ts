import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';

import { Professeur } from '../model/prof';
import { ProfService } from '../services/prof.service';


@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.scss']
})
export class ProfComponent implements OnInit {
  myProfs: Professeur[] = [];
  teacherForm: FormGroup;

  constructor(private profService: ProfService, private formBuilder: FormBuilder) { 
    this.teacherForm = this.formBuilder.group({
      lastname: '',
      firstname: '',
      state: '',
      description: ''
    });
  }

  ngOnInit(): void {
    this.myProfs = this.profService.getProfs();
  }

  deleteProfs(): void {
    this.myProfs = this.profService.deleteProfs();
    this.showReInitButton();
    (document.getElementById('deleteBtn') as HTMLInputElement).style.display = 'none';
  }

  deleteProf(profId: number): void {
    const currentList = this.myProfs.slice(0, this.myProfs.length);
    this.myProfs = this.profService.deleteProfId(currentList, profId);
    this.showReInitButton();
  }

  onSubmit(newTeacher: NgForm): string {
    const lastname = this.teacherForm.get('lastname').value;
    const firstname = this.teacherForm.get('firstname').value;
    const state = this.teacherForm.get('state').value;
    const description = this.teacherForm.get('description').value;

    if (!lastname || !firstname || !state || !description) {
      alert('Vous n\'avez pas remplis tous les champs');
      return;
    }
    const currentList = this.myProfs.slice(0, this.myProfs.length);
    this.myProfs = this.profService.postTeacher(currentList, newTeacher);
    this.teacherForm.reset();
  }

  showReInitButton() {
    (document.getElementById('reInitBtn') as HTMLInputElement).style.display = 'initial';
  }

  reInitList(): void {
    const currentList = this.myProfs.slice(0, this.myProfs.length);
    currentList.map(c => new Professeur(c.id, c.firstname, c.lastname, c.statut, c.description));
    const newList = this.profService.getProfs();
    if (currentList.length > 0) {
       currentList.forEach(prof => {
      newList.push(prof);
    });
    }
    this.myProfs = newList;
    (document.getElementById('reInitBtn') as HTMLInputElement).style.display = 'none';
    (document.getElementById('deleteBtn') as HTMLInputElement).style.display = 'initial';
  }


}
