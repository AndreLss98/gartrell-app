import { TestBed } from '@angular/core/testing';

import { ReflexoesService } from './reflexoes.service';

describe('ReflexoesService', () => {
  let service: ReflexoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReflexoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
