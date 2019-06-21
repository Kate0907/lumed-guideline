import { Injectable } from '@angular/core';
import { MAINS } from './mock-mainsection';
import { IBreadcrumb } from './IBreadcrumb';


@Injectable({
  providedIn: 'root'
})

export class BreadcrumbService {

  // public breadcrumbs: IBreadcrumb[] = [];

  private reinitBreadcrumbs() {
    return [{
      url: '/',
      label: 'Home'
    } as IBreadcrumb];
  }

  public getBreadcrumbs(url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {

    const urls = url.split('/');
    const urlId = urls[urls.length - 1];
    const suchid = Number(urlId);
    let suchname = 'no name';
    console.log(url, urls, urlId, suchid);
    if (Number.isNaN(suchid) === true || urlId === '') {
      return this.reinitBreadcrumbs();
    }

    if (breadcrumbs.length === 0) {
      breadcrumbs = this.reinitBreadcrumbs();
    }

    const suchmain = MAINS.find(element => element.id === suchid);
    if (suchmain == null) {
      suchname = 'No Data';
    } else {
      suchname = suchmain.name;
    }

    console.log(suchmain == null);
    // add breadcrumb
    const breadcrumb: IBreadcrumb = {
      label: suchname,
      url: url
    };
    breadcrumbs.push(breadcrumb);

    for (let i = 0; i < breadcrumbs.length; i++) {
      const bread = breadcrumbs[i];
      if (bread.url === url) {
        console.log('should remove now', i, breadcrumbs);
        return breadcrumbs.slice(0, i + 1);
      }
    }
    return breadcrumbs;
  }
}
