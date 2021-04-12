import { TestBed } from '@angular/core/testing';

import { GaleriaFotosResolver } from './galeria-fotos.resolver';

describe('GaleriaFotosResolverService', () => {
  let service: GaleriaFotosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaleriaFotosResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
