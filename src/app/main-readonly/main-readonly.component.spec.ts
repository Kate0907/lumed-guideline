import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReadonlyComponent } from './main-readonly.component';

describe('MainReadonlyComponent', () => {
  let component: MainReadonlyComponent;
  let fixture: ComponentFixture<MainReadonlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainReadonlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainReadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
