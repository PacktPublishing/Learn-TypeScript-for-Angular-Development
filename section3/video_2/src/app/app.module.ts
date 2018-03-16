import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

import { FootballDataService } from './football-data.service';
import { PlayerListComponent } from './player-list/player-list.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FootballDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
