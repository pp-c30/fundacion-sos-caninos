import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionPublicComponent } from './navegacion-public.component';

describe('NavegacionPublicComponent', () => {
  let component: NavegacionPublicComponent;
  let fixture: ComponentFixture<NavegacionPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegacionPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
