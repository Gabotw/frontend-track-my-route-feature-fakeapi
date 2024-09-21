import { TestBed } from '@angular/core/testing';

import { PayTicketService } from './pay-ticket.service';

describe('BusService', () => {
  let service: PayTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
