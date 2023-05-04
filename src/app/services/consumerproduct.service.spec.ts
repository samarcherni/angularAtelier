import { TestBed } from '@angular/core/testing';

import { ConsumerproductService } from './consumerproduct.service';

describe('ConsumerproductService', () => {
  let service: ConsumerproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
