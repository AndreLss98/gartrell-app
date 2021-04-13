import { TestBed } from '@angular/core/testing';

import { ServicosResolver } from './servicos.resolver';

describe('ServicesResolverService', () => {
  let service: ServicosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicosResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
