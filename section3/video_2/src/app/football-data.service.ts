import { Injectable } from '@angular/core';

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
  constructor() { }

  getPlayerList() {
    return this.playerList
  }
}
