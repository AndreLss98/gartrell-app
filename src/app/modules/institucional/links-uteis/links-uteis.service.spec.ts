import { TestBed } from '@angular/core/testing';

import { LinksUteisService } from './links-uteis.service';

describe('LinksUteisService', () => {
  let service: LinksUteisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinksUteisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
