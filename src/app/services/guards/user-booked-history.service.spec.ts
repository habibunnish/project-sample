import { TestBed } from '@angular/core/testing';

import { UserBookedHistoryService } from './user-booked-history.service';

describe('UserBookedHistoryService', () => {
  let service: UserBookedHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBookedHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
