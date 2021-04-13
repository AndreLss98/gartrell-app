import { TestBed } from '@angular/core/testing';

import { IdentidadeNominalResolver } from './identidade-nominal.resolver';

describe('IdentidadeNominalResolverService', () => {
  let service: IdentidadeNominalResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentidadeNominalResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
