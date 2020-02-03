import { TestBed } from '@angular/core/testing';

import { RightSidebarService } from './right-sidebar.service';

describe('RightSidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RightSidebarService = TestBed.get(RightSidebarService);
    expect(service).toBeTruthy();
  });
});
