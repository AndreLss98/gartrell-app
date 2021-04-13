import { TestBed } from '@angular/core/testing';

import { PostsSociedadeResolver } from './posts-sociedade.resolver';

describe('PostsSociedadeResolverService', () => {
  let service: PostsSociedadeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsSociedadeResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
