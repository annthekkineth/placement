import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovestudComponent } from './approvestud.component';

describe('ApprovestudComponent', () => {
  let component: ApprovestudComponent;
  let fixture: ComponentFixture<ApprovestudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovestudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovestudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
