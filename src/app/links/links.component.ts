import { Component, OnInit, Input } from '@angular/core';
import { Illness } from '../illness';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { IllnessService } from '../illness.service';
import { Link } from '../Link';



@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  @Input()
  public illill: Illness;
  public linklink: Link;

  constructor() { }

  ngOnInit() {
  }

}
