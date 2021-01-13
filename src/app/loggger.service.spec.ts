import { TestBed } from '@angular/core/testing';

import { LogggerService } from './loggger.service';

describe('LogggerService', () => {
  let service: LogggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
