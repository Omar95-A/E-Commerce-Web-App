import { TestBed } from '@angular/core/testing';

import { ManageCartsService } from './manage-carts.service';

describe('ManageCartsService', () => {
  let service: ManageCartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageCartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
