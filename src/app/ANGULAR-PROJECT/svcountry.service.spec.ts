import { TestBed } from '@angular/core/testing';

import { SVcountryService } from './svcountry.service';

describe('SVcountryService', () => {
  let service: SVcountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SVcountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
