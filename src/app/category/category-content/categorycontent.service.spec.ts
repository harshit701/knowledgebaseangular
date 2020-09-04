import { TestBed } from '@angular/core/testing';

import { CategorycontentService } from './categorycontent.service';

describe('CategorycontentService', () => {
  let service: CategorycontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorycontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
