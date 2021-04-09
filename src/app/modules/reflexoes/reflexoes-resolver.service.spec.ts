import { TestBed } from '@angular/core/testing';

import { ReflexoesResolver } from './reflexoes.resolver';

describe('ReflexoesResolverService', () => {
  let service: ReflexoesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReflexoesResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
