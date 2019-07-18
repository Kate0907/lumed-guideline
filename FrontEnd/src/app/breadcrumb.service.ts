import { Injectable } from '@angular/core';
import { IBreadcrumb } from './IBreadcrumb';
import { MainDatabaseService } from './main-database.service';


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
  ) { }

  public async getBreadcrumbs(Url: string = '', breadcrumbs: IBreadcrumb[] = []): Promise<IBreadcrumb[]> {

    const urls = Url.split('/');
    const urlId = urls[urls.length - 1];
    const currentId = Number(urlId);
    let currentName = 'no name';
    if (Number.isNaN(currentId) === true || urlId === '') {
      return this.reinitBreadcrumbs();
    }

    if (breadcrumbs.length === 0) {
      breadcrumbs = this.reinitBreadcrumbs();
    }

    const currentMain = await this._DB.getMain(currentId);
    const name = currentMain.name;
    if (currentMain == null) {
      currentName = 'No Data';
    } else {
      currentName = name;
    }

    // add breadcrumb
    const breadcrumb: IBreadcrumb = {
      label: currentName,
      url: Url
    };
    breadcrumbs.push(breadcrumb);

    for (let i = 0; i < breadcrumbs.length; i++) {
      const bread = breadcrumbs[i];
      if (bread.url === Url) {
        return breadcrumbs.slice(0, i + 1);
      }
    }
    return breadcrumbs;
  }
}
