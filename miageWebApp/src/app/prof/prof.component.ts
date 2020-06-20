import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

import { Professeur } from '../model/prof';
import { ProfService } from '../services/prof.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.scss']
})
export class ProfComponent implements OnInit {
  myProfs: Professeur[] = [];
  showBtnInit: boolean;
  showBtnDelete:boolean;
  addActive: boolean;

  constructor(private profService: ProfService) { }

  ngOnInit(): void {
    this.showBtnInit = false;
    this.showBtnDelete = true;
    this.addActive = false;
    this.getProfs();
  }

  getProfs(): void{
    this.myProfs = this.profService.getProfs();
  }

  deleteProfs(): void {
    this.myProfs = this.profService.deleteProfs();
    this.showBtnInit = true;
    this.showBtnDelete = false;
  }

  deleteProf(profId: number): void {
    const currentList = this.myProfs.slice(0, this.myProfs.length);
    this.myProfs = this.profService.deleteProfId(currentList, profId);
    this.showBtnInit = true;
  }

  reInitList(): void {
    const currentList = this.profService.getProfs();
    currentList.slice(0, this.myProfs.length);
    currentList.map(c => new Professeur(c.id, c.firstname, c.lastname, c.statut, c.description));
    this.myProfs = currentList;
    this.showBtnDelete = true;
    this.showBtnInit = false;
  }

  addTeacher(){
    this.addActive = true;
  }

  updateList(event){
    const currentList = this.myProfs.slice(0, this.myProfs.length);
    event.id = this.myProfs.length + 1;
    currentList.push(event);
    this.myProfs = currentList.map(p => new Professeur(p.id, p.firstname, p.lastname, p.statut, p.description));
  }


}
