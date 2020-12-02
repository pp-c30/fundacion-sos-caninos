import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLocalidadesComponent } from './admin-localidades.component';

describe('AdminLocalidadesComponent', () => {
  let component: AdminLocalidadesComponent;
  let fixture: ComponentFixture<AdminLocalidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLocalidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLocalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
