import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetalleDonacionesComponent } from './admin-detalle-donaciones.component';

describe('AdminDetalleDonacionesComponent', () => {
  let component: AdminDetalleDonacionesComponent;
  let fixture: ComponentFixture<AdminDetalleDonacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetalleDonacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetalleDonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
