import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAdopcionPublicComponent } from './formulario-adopcion-public.component';

describe('FormularioAdopcionPublicComponent', () => {
  let component: FormularioAdopcionPublicComponent;
  let fixture: ComponentFixture<FormularioAdopcionPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAdopcionPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAdopcionPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
