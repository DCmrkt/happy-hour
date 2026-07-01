import { Component } from '@angular/core';
import { stats } from '../../happy-hour.data';
import { AppIconComponent } from '../app-icon/app-icon.component';

@Component({
  selector: 'app-stats-grid',
  imports: [AppIconComponent],
  templateUrl: './stats-grid.component.html',
  styleUrl: './stats-grid.component.css',
})
export class StatsGridComponent {
  readonly stats = stats;
}
