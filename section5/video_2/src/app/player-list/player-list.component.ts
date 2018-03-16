import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../football-data.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  playerList = [];
  constructor(private footballData: FootballDataService) { }

  ngOnInit() {
    this.playerList = this.footballData.getPlayerList();
  }

}
