import { Component } from '@angular/core';
import { shifts } from '../../happy-hour.data';

@Component({
  selector: 'app-upcoming-shifts',
  templateUrl: './upcoming-shifts.component.html',
  styleUrl: './upcoming-shifts.component.css',
})
export class UpcomingShiftsComponent {
  readonly shifts = shifts;
}
