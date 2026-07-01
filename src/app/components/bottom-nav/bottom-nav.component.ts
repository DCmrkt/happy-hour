import { Component } from '@angular/core';
import { AppIconComponent } from '../app-icon/app-icon.component';

@Component({
  selector: 'app-bottom-nav',
  imports: [AppIconComponent],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.css',
})
export class BottomNavComponent {
  readonly items = [
    { icon: 'timer', label: 'Home', active: true },
    { icon: 'calendar', label: 'Turni' },
    { icon: 'medal', label: 'Badge' },
    { icon: 'profile', label: 'Profilo' },
  ];
}
