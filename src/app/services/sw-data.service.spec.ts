import { TestBed } from '@angular/core/testing';

import { SwDataService } from './sw-data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SwDataService', () => {
  let service: SwDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HttpClient ],
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(SwDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
