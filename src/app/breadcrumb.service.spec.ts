
import { BreadcrumbService } from './breadcrumb.service';
import { IBreadcrumb } from './IBreadcrumb';


describe('BreadcrumbService', () => {
  let service: BreadcrumbService;

  beforeEach(() => {
    service = new BreadcrumbService();
  });

  it('getBreadCrumbs() - should only have a "Home" breadcrumbs', () => {
    const result = service.getBreadcrumbs('', []);
    expect(result.length).toBe(1);
    expect(result[0].label).toBe('Home');
  });

  it('getBreadCrumbs() url = /detail/0 - should only have 2 breadcrumbs', () => {
    const result = service.getBreadcrumbs('/detail/0', []);
    expect(result.length).toBe(2);
    expect(result[1].label).toBe('Penicillin Allergy(Peri-Operative)');
  });

  it('getBreadCrumbs() url = unexist id - should only have 2 breadcrumbs', () => {
    const bread: IBreadcrumb[] = service.getBreadcrumbs('', []);
    const result = service.getBreadcrumbs('/detail/567', bread);
    expect(result.length).toBe(2);
    expect(result[1].label).toBe('No Data');
  });

  it('getBreadCrumbs() add 3 breadcrumbs - should have 4 breadcrumbs in total', () => {
    let bread: IBreadcrumb[] = service.getBreadcrumbs('', []);
    bread = service.getBreadcrumbs('/detail/2', bread);
    bread = service.getBreadcrumbs('/detail/3', bread);
    bread = service.getBreadcrumbs('/detail/4', bread);
    expect(bread.length).toBe(4);
    expect(bread[3].label).toBe('Infectious Diarrhea');
  });

  it('getBreadCrumbs() add 4 breadcrumbs last one duplicate - should remove all after duplicate', () => {
    let bread: IBreadcrumb[] = service.getBreadcrumbs('', []);
    bread = service.getBreadcrumbs('/detail/2', bread);
    bread = service.getBreadcrumbs('/detail/3', bread);
    bread = service.getBreadcrumbs('/detail/4', bread);
    bread = service.getBreadcrumbs('/detail/2', bread);
    expect(bread.length).toBe(2);
    expect(bread[2]).toBeUndefined;
    expect(bread[1].label).toBe('Acute Bacterial Meningitis');
  });

  it('getBreadCrumbs() last element of url is not a number - should only have "Home" breadcrumb', () => {
    let bread: IBreadcrumb[] = service.getBreadcrumbs('', []);
    bread = service.getBreadcrumbs('/abcde', bread);
    bread = service.getBreadcrumbs('/main', bread);
    expect(bread.length).toBe(1);
    expect(bread[1]).toBeUndefined;
  });
});
