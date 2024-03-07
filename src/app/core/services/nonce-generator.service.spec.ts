import { TestBed } from '@angular/core/testing';

import { NonceGeneratorService } from './nonce-generator.service';

describe('NonceGeneratorService', () => {
  let service: NonceGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonceGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
