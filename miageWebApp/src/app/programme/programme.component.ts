import { Component, OnInit } from '@angular/core';
import { CoursService } from '../services/cours.service';
import { Cours } from '../model/cours';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.scss']
})
export class ProgrammeComponent implements OnInit {
  myClasses: Cours[] = [];

  constructor(private rest: CoursService) { }

  ngOnInit(): void {
    this.myClasses = this.rest.getCours();
  }

}
