import {APP_BASE_HREF} from '@angular/common'
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FontSizeDirective } from './font-size.directive';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AboutUsPageComponent } from "./about-us-page/about-us-page.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { FootballDataService } from './football-data.service';
import { AuthService } from './auth.service';

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

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                FontSizeDirective,
                AboutUsPageComponent,
                LoginFormComponent,
                HomePageComponent
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                RouterModule.forRoot(appRoutes)
            ],
            providers: [
                {provide: APP_BASE_HREF, useValue: '/'},
                FootballDataService,
                AuthService
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
});
