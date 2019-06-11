import { Component, OnInit } from '@angular/core';
import { Illness } from '../illness';
import { IllnessService } from '../illness.service';
import { ILLGROUP } from './mock-illnessGroup';

@Component({
  selector: 'app-illness',
  templateUrl: './illness.component.html',
  styleUrls: ['./illness.component.css']
})
export class IllnessComponent implements OnInit {
  illnesses: Illness[];
  illnessgroup = ILLGROUP;


  constructor(private illnessService: IllnessService) { }

  ngOnInit() {
    this.getIllnesses();
  }


  getIllnesses(): void {
    this.illnessService.getIllnesses().subscribe(illnesses => this.illnesses = illnesses)
  }

}
