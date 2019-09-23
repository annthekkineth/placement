import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddriveComponent } from './adddrive.component';

describe('AdddriveComponent', () => {
  let component: AdddriveComponent;
  let fixture: ComponentFixture<AdddriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
