import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEditableComponent } from './main-editable.component';

describe('MainEditableComponent', () => {
  let component: MainEditableComponent;
  let fixture: ComponentFixture<MainEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
