import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetailReadonlyComponent } from './main-detail-readonly.component';

xdescribe('MainDetailReadonlyComponent', () => {
  let component: MainDetailReadonlyComponent;
  let fixture: ComponentFixture<MainDetailReadonlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDetailReadonlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDetailReadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
