import { Component, OnInit, Input } from '@angular/core';
import { MainSection } from '../main';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { MainService } from '../main.service';



@Component({
  selector: 'app-main-detail-readonly',
  templateUrl: './main-detail-readonly.component.html',
  styleUrls: ['./main-detail-readonly.component.css']
})
export class MainDetailReadonlyComponent implements OnInit {
  @Input() public main: MainSection;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService,
    private location: Location) {
      console.log(this)
    this.router.events.subscribe(navigation => {
      console.log(navigation);
      if (navigation instanceof NavigationEnd && navigation.url.indexOf('detail') !== -1) {
        this.getMain();
      }
    });
  }

  ngOnInit(): void {
    console.log(this);
  }
  public getMain(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mainService.getMain(id)
      .subscribe(main => {
        this.main = main;
        console.log(id, main);
      });
  }

  public addSection(): void {
    this.mainService.addSection(this.main);
  }

  public updateIllnessName(newname: string): void {
    this.mainService.updateMainName(this.main, newname);
  }

  public updateTitle(sectionIndex: number, newtitle: string): void {
    this.mainService.updateTitle(this.main, sectionIndex, newtitle);
  }

  public deleteMessage(sectionIndex: number, messageIndex: number): void {
    this.mainService.deleteMessage(this.main, sectionIndex, messageIndex);
  }

  public deleteLink(sectionIndex: number, linkIndex: number): void {
    this.mainService.deleteLink(this.main, sectionIndex, linkIndex);
  }

  deleteSection(sectionIndex: number): void {
    this.mainService.deleteSection(this.main, sectionIndex);
  }

  addMessage(sectionIndex: number): void {
    this.mainService.addMessage(this.main, sectionIndex);
  }

  addLink(sectionIndex: number): void {
    this.mainService.addLink(this.main, sectionIndex);
  }

  updateMessage(sectionIndex: number, messageIndex: number, message: string): void {
    this.mainService.updateMessage(this.main, sectionIndex, messageIndex, message);
  }

  goBack(): void {
    this.location.back();
  }
}

