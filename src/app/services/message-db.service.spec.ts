import {TestBed} from '@angular/core/testing';

import {MessageDbService} from './message-db.service';

describe('MessageDbService', () => {
  let service: MessageDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
