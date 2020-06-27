import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Professeur } from '../model/prof';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  teacherForm: FormGroup;
  @Output() teacher: EventEmitter<Professeur> = new EventEmitter;
  @Input('showModal') public addActive;

  constructor(private formBuilder: FormBuilder) { 
    this.teacherForm = this.formBuilder.group({
      lastname: '',
      firstname: '',
      statut: '',
      description: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    const form = this.teacherForm.value;
    if (!form ||!form.lastname || !form.firstname || !form.statut || !form.description) {
      alert('Vous n\'avez pas remplis tous les champs');
      return;
    }
    this.teacher.emit(form);
    this.teacherForm.reset();
  }

}
