import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service'

import { FootballDataService } from './football-data.service';

describe('FootballDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootballDataService, AuthService]
    });
  });

  it('should be created', inject([FootballDataService], (service: FootballDataService) => {
    expect(service).toBeTruthy();
  }));
});
