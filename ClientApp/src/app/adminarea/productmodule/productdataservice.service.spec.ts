import { TestBed } from '@angular/core/testing';

import { ProductdataserviceService } from './productdataservice.service';

describe('ProductdataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductdataserviceService = TestBed.get(ProductdataserviceService);
    expect(service).toBeTruthy();
  });
});
