import { TestBed } from '@angular/core/testing';

import { NoticiasResolver } from './noticias.resolver';

describe('NoticiasResolverService', () => {
  let service: NoticiasResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticiasResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
