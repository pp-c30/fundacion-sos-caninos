import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAdopcionComponent } from './formulario-adopcion.component';

describe('FormularioAdopcionComponent', () => {
  let component: FormularioAdopcionComponent;
  let fixture: ComponentFixture<FormularioAdopcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAdopcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
