import { TestBed } from '@angular/core/testing';

import { MovetocService } from './movetoc.service';

describe('MovetocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovetocService = TestBed.get(MovetocService);
    expect(service).toBeTruthy();
  });
});
