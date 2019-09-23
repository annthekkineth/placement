import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedriveComponent } from './managedrive.component';

describe('ManagedriveComponent', () => {
  let component: ManagedriveComponent;
  let fixture: ComponentFixture<ManagedriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
