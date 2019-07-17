import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreadcrumbService } from '../breadcrumb.service';
import { IBreadcrumb } from '../IBreadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[] = [];

  constructor(private router: Router, private service: BreadcrumbService) {}

  public async ngOnInit() : Promise<void> {
    // subscribe to the NavigationEnd event
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      // set breadcrumbs, breadcrumbs increase each time function is called
     this.service
         .getBreadcrumbs((event as NavigationEnd).urlAfterRedirects, this.breadcrumbs)
         .then(newBreadcrumb => this.breadcrumbs = newBreadcrumb);
    });
  }
}
