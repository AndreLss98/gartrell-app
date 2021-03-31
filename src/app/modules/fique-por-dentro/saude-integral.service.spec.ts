import { TestBed } from '@angular/core/testing';

import { SaudeIntegralService } from './saude-integral.service';

describe('SaudeIntegralService', () => {
  let service: SaudeIntegralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaudeIntegralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
