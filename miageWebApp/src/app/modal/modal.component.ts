import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  teacherForm: FormGroup;
  showModal: boolean;
  @Output() teacher: EventEmitter<any> = new EventEmitter;
  
  constructor(private formBuilder: FormBuilder) { 
    this.teacherForm = this.formBuilder.group({
      lastname: '',
      firstname: '',
      statut: '',
      description: ''
    });
  }

  ngOnInit() {
    this.showModal = true;
  }

  onSubmit(): void {
    const lastname = this.teacherForm.get('lastname').value;
    const firstname = this.teacherForm.get('firstname').value;
    const statut = this.teacherForm.get('statut').value;
    const description = this.teacherForm.get('description').value;

    if (!lastname || !firstname || !statut || !description) {
      alert('Vous n\'avez pas remplis tous les champs');
      return;
    }

    const form = this.teacherForm.value;
    this.teacher.emit(form);
    this.teacherForm.reset();
    this.showModal = false;
  }

}
