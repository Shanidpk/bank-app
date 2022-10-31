import { TestBed } from '@angular/core/testing';

import { RegisterservService } from './registerserv.service';

describe('RegisterservService', () => {
  let service: RegisterservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
