import { TestBed, inject } from '@angular/core/testing';

import { FootballDataService } from './football-data.service';

describe('FootballDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootballDataService]
    });
  });

  it('should be created', inject([FootballDataService], (service: FootballDataService) => {
    expect(service).toBeTruthy();
  }));
});
