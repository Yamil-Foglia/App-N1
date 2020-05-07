import { TestBed } from '@angular/core/testing';

import { GaleryService } from './galery.service';

describe('GaleryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GaleryService = TestBed.get(GaleryService);
    expect(service).toBeTruthy();
  });
});
