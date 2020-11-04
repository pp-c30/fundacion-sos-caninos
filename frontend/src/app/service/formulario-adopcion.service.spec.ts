import { TestBed } from '@angular/core/testing';

import { FormularioAdopcionService } from './formulario-adopcion.service';

describe('FormularioAdopcionService', () => {
  let service: FormularioAdopcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioAdopcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
