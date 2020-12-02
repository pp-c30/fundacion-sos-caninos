import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProvinciaComponent } from './admin-provincia.component';

describe('AdminProvinciaComponent', () => {
  let component: AdminProvinciaComponent;
  let fixture: ComponentFixture<AdminProvinciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProvinciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
