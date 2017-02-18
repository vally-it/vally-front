/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountKindsService } from './account-kinds.service';

describe('AccountKindsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountKindsService]
    });
  });

  it('should ...', inject([AccountKindsService], (service: AccountKindsService) => {
    expect(service).toBeTruthy();
  }));
});
