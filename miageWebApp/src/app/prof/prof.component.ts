import { Component, OnInit } from '@angular/core';
import { Professeur } from '../model/prof';
import { ProfService } from '../services/prof.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.scss']
})
export class ProfComponent implements OnInit {
  myProfs: Professeur[] = [];

  constructor(private profService: ProfService) { }

  ngOnInit(): void {
    this.myProfs = this.profService.getProfs();
  }

  deleteProfs(): void {
    this.myProfs = this.profService.deleteProfs();
  }



}
