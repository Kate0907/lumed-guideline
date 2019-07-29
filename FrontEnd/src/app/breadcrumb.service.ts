import { Injectable } from '@angular/core';
import { IBreadcrumb } from './IBreadcrumb';
import { GuidelineHttpService } from './main-database.service';


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

  constructor(private _DB: GuidelineHttpService,
  ) { }

  public async getBreadcrumbs(currentUrl: string = '', breadcrumbs: IBreadcrumb[] = []): Promise<IBreadcrumb[]> {

    const urls = currentUrl.split('/');
    const urlId = urls[urls.length - 1];
    const type = urls[urls.length - 2];
    const currentId = Number(urlId);
    let currentName = 'no name';
    if (Number.isNaN(currentId) === true || urlId === '') {
      return this.reinitBreadcrumbs();
    }

    if (breadcrumbs.length === 0) {
      breadcrumbs = this.reinitBreadcrumbs();
    }

    const currentItem = await this._DB.getOneItem(currentId);
    const name = currentItem.name;
    if (currentItem == null) {
      currentName = 'No Data';
    } else {
      if (type === 'result') {
        currentName = name + ' Result';
      } else {
        currentName = name;
      }

    }

    // add breadcrumb
    const breadcrumb: IBreadcrumb = {
      label: currentName,
      url: currentUrl
    };
    breadcrumbs.push(breadcrumb);

    for (let i = 0; i < breadcrumbs.length; i++) {
      const bread = breadcrumbs[i];
      if (bread.url === currentUrl) {
        return breadcrumbs.slice(0, i + 1);
      }
    }
    return breadcrumbs;
  }
}
