import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestListSGCComponent } from './request-list-sgc.component';

describe('RequestListSGCComponent', () => {
  let component: RequestListSGCComponent;
  let fixture: ComponentFixture<RequestListSGCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestListSGCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListSGCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
