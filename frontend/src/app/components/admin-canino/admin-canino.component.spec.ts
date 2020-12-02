import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCaninoComponent } from './admin-canino.component';

describe('AdminCaninoComponent', () => {
  let component: AdminCaninoComponent;
  let fixture: ComponentFixture<AdminCaninoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCaninoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCaninoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
