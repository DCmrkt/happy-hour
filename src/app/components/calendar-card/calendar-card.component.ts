import { Component } from '@angular/core';
import { calendarDays } from '../../happy-hour.data';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrl: './calendar-card.component.css',
})
export class CalendarCardComponent {
  readonly weekdays = ['L', 'M', 'M', 'G', 'V', 'S', 'D'];
  readonly days = calendarDays;
}
