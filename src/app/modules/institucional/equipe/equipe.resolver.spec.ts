import { TestBed } from '@angular/core/testing';

import { EquipeResolver } from './equipe.resolver';

describe('EquipeResolverService', () => {
  let service: EquipeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipeResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
