import { TestBed } from '@angular/core/testing';

import { DesenvolvimentoHumanoService } from './desenvolvimento-humano.service';

describe('DesenvolvimentoHumanoService', () => {
  let service: DesenvolvimentoHumanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesenvolvimentoHumanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
