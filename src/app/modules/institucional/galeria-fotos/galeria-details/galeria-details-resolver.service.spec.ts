import { TestBed } from '@angular/core/testing';

import { GaleriaDetailsResolver } from './galeria-details.resolver';

describe('GaleriaDetailsResolverService', () => {
  let service: GaleriaDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaleriaDetailsResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
