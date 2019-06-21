import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetailEditableComponent } from './main-detail-editable.component';

xdescribe('MainDetailEditableComponent', () => {
  let component: MainDetailEditableComponent;
  let fixture: ComponentFixture<MainDetailEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDetailEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDetailEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
