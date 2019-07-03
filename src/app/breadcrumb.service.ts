import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBreadcrumb } from './IBreadcrumb';
import { MainDatabaseService } from './main-database.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BreadcrumbService {

  private reinitBreadcrumbs() {
    return [{
      url: '/',
      label: 'Home'
    } as IBreadcrumb];
  }

  constructor(private _DB: MainDatabaseService,
    private http: HttpClient, ) { }

  public getBreadcrumbs(url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {

    const urls = url.split('/');
    const urlId = urls[urls.length - 1];
    const suchid = Number(urlId);
    let suchname = 'no name';
    if (Number.isNaN(suchid) === true || urlId === '') {
      return this.reinitBreadcrumbs();
    }

    if (breadcrumbs.length === 0) {
      breadcrumbs = this.reinitBreadcrumbs();
    }

    const suchmain = this._DB.getMain(suchid);
    suchmain.subscribe(main => {
      const name = main.name;
      if (suchmain == null) {
        suchname = 'No Data';
      } else {
        suchname = name;
      }

      // add breadcrumb
      const breadcrumb: IBreadcrumb = {
        label: suchname,
        url: url
      };
      breadcrumbs.push(breadcrumb);
    });

    for (let i = 0; i < breadcrumbs.length; i++) {
      const bread = breadcrumbs[i];
      if (bread.url === url) {
        return breadcrumbs.slice(0, i + 1);
      }
    }
    return breadcrumbs;
  }
}