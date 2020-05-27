import { Component, OnInit } from '@angular/core';


import { Cours } from '../model/cours';
import { CoursService } from '../services/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})

export class CoursComponent implements OnInit {
  myClasses: Cours[] = [];

  constructor(private coursService: CoursService) {}

  ngOnInit() {
    this.myClasses = this.coursService.getCours();
  }

  deleteAll(): void {
    this.myClasses = this.coursService.deleteAllClasses();
  }


}
