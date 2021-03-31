import { TestBed } from '@angular/core/testing';

import { SociedadeService } from './sociedade.service';

describe('SociedadeService', () => {
  let service: SociedadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SociedadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
