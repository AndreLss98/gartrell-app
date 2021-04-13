import { TestBed } from '@angular/core/testing';

import { PostsDesenvolvimentoHumanoResolver } from './posts-desenvolvimento-humano.resolver';

describe('PostsDesenvolvimentoHumanoResolverService', () => {
  let service: PostsDesenvolvimentoHumanoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsDesenvolvimentoHumanoResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
