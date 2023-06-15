import { TestBed } from '@angular/core/testing';

import { SwDataService } from './sw-data.service';

describe('SwDataService', () => {
  let service: SwDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
