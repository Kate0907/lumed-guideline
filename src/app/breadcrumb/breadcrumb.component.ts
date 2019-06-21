import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreadcrumbService } from '../breadcrumb.service';
import { IBreadcrumb } from '../IBreadcrumb';
//    tslint:disable: max-line-length




@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService, ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    // subscribe to the NavigationEnd event
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      // set breadcrumbs(recursively call getBreadcrumbs)
      this.breadcrumbs = this.breadcrumbService.getBreadcrumbs((event as NavigationEnd).urlAfterRedirects, this.breadcrumbs);
    });
  }
}
