import { TestBed } from '@angular/core/testing';

import { ConsultaOnlineService } from './consulta-online.service';

describe('ConsultaOnlineService', () => {
  let service: ConsultaOnlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaOnlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
