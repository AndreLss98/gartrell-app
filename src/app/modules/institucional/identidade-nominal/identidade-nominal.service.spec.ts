import { TestBed } from '@angular/core/testing';

import { IdentidadeNominalService } from './identidade-nominal.service';

describe('IdentidadeNominalService', () => {
  let service: IdentidadeNominalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentidadeNominalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
