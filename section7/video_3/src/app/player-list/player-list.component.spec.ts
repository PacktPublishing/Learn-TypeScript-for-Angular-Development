import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FootballDataService } from '../football-data.service';
import { AuthService } from '../auth.service';

import { PlayerListComponent } from './player-list.component';

describe('PlayerListComponent', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerListComponent ],
      providers: [ FootballDataService, AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should player list equal to 2', () => {
      expect(component.playerList.length).toEqual(2);
  });

  it('should contain a paragraph with text "test"', () => {
      fixture = TestBed.createComponent(PlayerListComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('p').innerText).toEqual('test');
  });
});
