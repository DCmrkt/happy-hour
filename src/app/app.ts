import { Component } from '@angular/core';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { CalendarCardComponent } from './components/calendar-card/calendar-card.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { NoticeBannerComponent } from './components/notice-banner/notice-banner.component';
import { StatsGridComponent } from './components/stats-grid/stats-grid.component';
import { UpcomingShiftsComponent } from './components/upcoming-shifts/upcoming-shifts.component';

@Component({
  selector: 'app-root',
  imports: [
    ActionBarComponent,
    AppHeaderComponent,
    BottomNavComponent,
    CalendarCardComponent,
    HeroCardComponent,
    NoticeBannerComponent,
    StatsGridComponent,
    UpcomingShiftsComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
