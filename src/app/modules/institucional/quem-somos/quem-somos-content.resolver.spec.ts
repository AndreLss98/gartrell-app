import { TestBed } from '@angular/core/testing';

import { QuemSomosContentResolver } from './quem-somos-content.resolver';

describe('QuemSomosContentResolverService', () => {
  let service: QuemSomosContentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuemSomosContentResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
