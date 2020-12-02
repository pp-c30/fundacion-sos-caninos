import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCuerpoNavegacionComponent } from './admin-cuerpo-navegacion.component';

describe('AdminCuerpoNavegacionComponent', () => {
  let component: AdminCuerpoNavegacionComponent;
  let fixture: ComponentFixture<AdminCuerpoNavegacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCuerpoNavegacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCuerpoNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
