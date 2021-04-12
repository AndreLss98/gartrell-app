import { TestBed } from '@angular/core/testing';

import { AconteceResolver } from './acontece.resolver';

describe('AconteceResolverService', () => {
  let service: AconteceResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AconteceResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
