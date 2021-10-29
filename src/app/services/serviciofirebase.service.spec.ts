import { TestBed } from '@angular/core/testing';

import { ServiciofirebaseService } from './serviciofirebase.service';

describe('ServiciofirebaseService', () => {
  let service: ServiciofirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciofirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
