import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestListSCIComponent } from './request-list-sci.component';

describe('RequestListSCIComponent', () => {
  let component: RequestListSCIComponent;
  let fixture: ComponentFixture<RequestListSCIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestListSCIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListSCIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
