import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedstudComponent } from './appliedstud.component';

describe('AppliedstudComponent', () => {
  let component: AppliedstudComponent;
  let fixture: ComponentFixture<AppliedstudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedstudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
