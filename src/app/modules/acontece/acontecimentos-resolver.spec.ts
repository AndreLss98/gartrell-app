import { TestBed } from '@angular/core/testing';

import { AcontecimentosResolver } from './acontecimentos-resolver';

describe('AcontecimentosResolverService', () => {
  let service: AcontecimentosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcontecimentosResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
