import { TestBed } from '@angular/core/testing';

import { Categoria_donacionService } from './categoria_donacion.service';

describe('Categoria_donacionService', () => {
  let service: Categoria_donacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Categoria_donacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
