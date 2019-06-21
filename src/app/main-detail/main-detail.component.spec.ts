import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetailComponent } from './main-detail.component';

xdescribe('IllnessDetailComponent', () => {
  let component: MainDetailComponent;
  let fixture: ComponentFixture<MainDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
