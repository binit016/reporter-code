import { TestBed } from '@angular/core/testing';

import { GlobalContactService } from './global-contact.service';

describe('GlobalContactService', () => {
  let service: GlobalContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
