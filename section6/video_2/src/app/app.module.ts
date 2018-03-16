import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

import { FootballDataService } from './football-data.service';
import { AuthService } from './auth.service';
import { PlayerListComponent } from './player-list/player-list.component';
import { FontSizeDirective } from './font-size.directive';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

const appRoutes: Routes = [
    {
      path: 'home',
      component: HomePageComponent
    },
    {
      path: 'login',
      component: LoginFormComponent
    },
    {
      path: 'aboutUs',
      component: AboutUsPageComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PlayerListComponent,
    FontSizeDirective,
    LoginFormComponent,
    HomePageComponent,
    AboutUsPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FootballDataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
