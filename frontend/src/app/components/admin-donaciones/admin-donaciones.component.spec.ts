import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDonacionesComponent } from './admin-donaciones.component';

describe('AdminDonacionesComponent', () => {
  let component: AdminDonacionesComponent;
  let fixture: ComponentFixture<AdminDonacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDonacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
