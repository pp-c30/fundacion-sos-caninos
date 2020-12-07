import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetalleCaninoComponent } from './admin-detalle-canino.component';

describe('AdminDetalleCaninoComponent', () => {
  let component: AdminDetalleCaninoComponent;
  let fixture: ComponentFixture<AdminDetalleCaninoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetalleCaninoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetalleCaninoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
