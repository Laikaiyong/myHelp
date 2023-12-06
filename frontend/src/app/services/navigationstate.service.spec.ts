import { TestBed } from '@angular/core/testing';

import { NavigationstateService } from './navigationstate.service';

describe('NavigationstateService', () => {
  let service: NavigationstateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationstateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
