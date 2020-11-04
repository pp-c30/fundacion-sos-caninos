import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDonacionComponent } from './categoria-donacion.component';

describe('CategoriaDonacionComponent', () => {
  let component: CategoriaDonacionComponent;
  let fixture: ComponentFixture<CategoriaDonacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaDonacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaDonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
