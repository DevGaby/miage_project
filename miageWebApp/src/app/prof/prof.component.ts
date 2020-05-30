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
  }

  deleteProf(profId: number): void {
    const currentList = this.myProfs.slice(0, this.myProfs.length);
    this.myProfs = this.profService.deleteProfId(currentList, profId);
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


}
