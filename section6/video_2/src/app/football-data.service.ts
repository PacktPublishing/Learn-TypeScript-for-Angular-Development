import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

interface Player {
  name: string;
  age: number;
}

const John: Player = {
  name: 'John',
  age: 30
}

const Mat: Player = {
  name: 'Mat',
  age: 20
}

@Injectable()
export class FootballDataService {
  playerList: Player[] = [John, Mat];
  constructor(private authService: AuthService) { }

  getPlayerList() {
    if (this.authService.isAuthorized()) {
      return this.playerList
    } else {
      return []
    }
  }
}
