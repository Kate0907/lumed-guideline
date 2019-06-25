import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllnessDetailComponent } from './illness-detail.component';

describe('IllnessDetailComponent', () => {
  let component: IllnessDetailComponent;
  let fixture: ComponentFixture<IllnessDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllnessDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllnessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
