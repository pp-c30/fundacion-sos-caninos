import { TestBed } from '@angular/core/testing';

import { CaninoService } from './canino.service';

describe('CaninoService', () => {
  let service: CaninoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaninoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
