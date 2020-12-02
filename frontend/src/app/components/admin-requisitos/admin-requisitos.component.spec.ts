import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRequisitosComponent } from './admin-requisitos.component';

describe('AdminRequisitosComponent', () => {
  let component: AdminRequisitosComponent;
  let fixture: ComponentFixture<AdminRequisitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRequisitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
