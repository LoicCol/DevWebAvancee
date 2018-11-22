import { TestBed } from '@angular/core/testing';

import { TechnoService } from './techno.service';

describe('TechnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechnoService = TestBed.get(TechnoService);
    expect(service).toBeTruthy();
  });
});
