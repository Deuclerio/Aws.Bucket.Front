import { TestBed } from '@angular/core/testing';

import { S3servicesService } from './s3services.service';

describe('S3servicesService', () => {
  let service: S3servicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(S3servicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
