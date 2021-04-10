import { TestBed } from '@angular/core/testing';

import { GetResumosResolver } from './get-resumos.resolver';

describe('GetResumosResolverService', () => {
  let service: GetResumosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetResumosResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
