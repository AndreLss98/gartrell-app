import { TestBed } from '@angular/core/testing';

import { PostsSaudeIntegralResolver } from './posts-saude-integral.resolver';

describe('PostsSaudeIntegralResolverService', () => {
  let service: PostsSaudeIntegralResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsSaudeIntegralResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
