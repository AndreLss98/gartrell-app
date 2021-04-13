import { TestBed } from '@angular/core/testing';

import { ConsultaOnlineResolver } from './consulta-online.resolver';

describe('ConsultaOnlineResolverService', () => {
  let service: ConsultaOnlineResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaOnlineResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
