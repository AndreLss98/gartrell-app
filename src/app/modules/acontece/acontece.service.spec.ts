import { TestBed } from '@angular/core/testing';

import { AconteceService } from './acontece.service';

describe('AconteceService', () => {
  let service: AconteceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AconteceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
