import { Component, OnInit, Input } from '@angular/core';
import { MainSection } from '../main';
import { MainService } from '../main.service';
import { MainGroup } from '../mainGroup';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  @Input() mains: MainSection[];
  @Input() maingroup: MainGroup[];
  isAdmin = true;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getMains();
    this.getMainGroup();
  }

  public getMainGroup(): void {
    this.mainService.getMainGroup().subscribe(mainGroup => this.maingroup = mainGroup);
  }

  public getMains(): void {
    this.mainService.getMains().subscribe(mains => this.mains = mains);
  }
}
