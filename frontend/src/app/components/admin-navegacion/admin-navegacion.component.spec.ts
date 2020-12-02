import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavegacionComponent } from './admin-navegacion.component';

describe('AdminNavegacionComponent', () => {
  let component: AdminNavegacionComponent;
  let fixture: ComponentFixture<AdminNavegacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNavegacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
