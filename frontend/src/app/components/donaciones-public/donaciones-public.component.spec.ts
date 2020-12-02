import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionesPublicComponent } from './donaciones-public.component';

describe('DonacionesPublicComponent', () => {
  let component: DonacionesPublicComponent;
  let fixture: ComponentFixture<DonacionesPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonacionesPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonacionesPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
