import { Component } from '@angular/core';
import { AppIconComponent } from './components/app-icon/app-icon.component';

@Component({
  selector: 'app-root',
  imports: [AppIconComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  screen: ScreenId = 'login';
  toast = '';

  readonly stats = [
    { icon: 'timer', value: '36h', label: "donate quest'anno", tone: 'blue' },
    { icon: 'medal', value: '6', label: 'badge conquistati', tone: 'amber' },
    { icon: 'check', value: '8', label: 'turni completati', tone: 'mint' },
    { icon: 'star', value: '120', label: 'punti guadagnati', tone: 'lavender' },
  ];

  readonly calendarDays = [
    { n: '27', muted: true },
    { n: '28', muted: true },
    { n: '29', muted: true },
    { n: '30', muted: true },
    { n: '1' },
    { n: '2' },
    { n: '3' },
    { n: '4' },
    { n: '5' },
    { n: '6' },
    { n: '7' },
    { n: '8' },
    { n: '9', note: 'Info', tone: 'blue' },
    { n: '10' },
    { n: '11' },
    { n: '12', note: 'Emporio', tone: 'mint' },
    { n: '13' },
    { n: '14' },
    { n: '15' },
    { n: '16' },
    { n: '17' },
    { n: '18', note: 'Accogl.', tone: 'lavender', today: true },
    { n: '19' },
    { n: '20' },
    { n: '21' },
    { n: '22' },
    { n: '23' },
    { n: '24' },
    { n: '25' },
    { n: '26', note: 'Magazz.', tone: 'amber' },
    { n: '27' },
    { n: '28' },
    { n: '29' },
    { n: '30' },
    { n: '31' },
  ];

  readonly shifts = [
    { day: '12', title: 'Emporio Solidale', area: 'Accoglienza', hours: '09:00-13:00', status: 'Validata' },
    { day: '18', title: 'Evento in piazza', area: 'Info point', hours: '16:00-20:00', status: 'Da confermare' },
    { day: '26', title: 'Magazzino viveri', area: 'Logistica', hours: '10:00-14:00', status: 'Prevista' },
  ];

  readonly tabs: { id: TabId; icon: string; label: string; target: ScreenId }[] = [
    { id: 'home', icon: 'timer', label: 'Home', target: 'home' },
    { id: 'turni', icon: 'calendar', label: 'Turni', target: 'calendar' },
    { id: 'ore', icon: 'medal', label: 'Ore', target: 'hours' },
    { id: 'messaggi', icon: 'megaphone', label: 'Messaggi', target: 'messages' },
    { id: 'profilo', icon: 'profile', label: 'Profilo', target: 'profile' },
  ];

  go(screen: ScreenId): void {
    this.screen = screen;
    this.toast = '';
    requestAnimationFrame(() => document.querySelector('.app-scroll')?.scrollTo({ top: 0 }));
  }

  activeTab(): TabId {
    if (['calendar', 'shiftDetail', 'confirmPresence', 'absence', 'swapStart', 'eligibleVolunteers', 'swapStatus'].includes(this.screen)) {
      return 'turni';
    }
    if (['hours', 'achievements'].includes(this.screen)) return 'ore';
    if (['messages', 'messageDetail'].includes(this.screen)) return 'messaggi';
    if (['profile', 'uploadDocument'].includes(this.screen)) return 'profilo';
    return 'home';
  }

  showToast(message: string): void {
    this.toast = message;
  }

  confirmPresence(): void {
    this.toast = 'Presenza confermata. Il turno e stato aggiornato.';
    setTimeout(() => this.go('home'), 1200);
  }

  downloadCertificate(): void {
    const text = [
      'Fondazione Aurora',
      '',
      'Attestato di partecipazione',
      '',
      'Si attesta che Francesca Rossi ha svolto 36 ore di volontariato nel 2026.',
      '',
      'Documento generato da Happy Hour.',
    ].join('\n');
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'Attestato_Francesca_Rossi_2026.txt';
    anchor.click();
    URL.revokeObjectURL(url);
    this.showToast('Attestato scaricato.');
  }
}

type ScreenId =
  | 'login'
  | 'home'
  | 'calendar'
  | 'shiftDetail'
  | 'confirmPresence'
  | 'absence'
  | 'swapStart'
  | 'eligibleVolunteers'
  | 'swapStatus'
  | 'hours'
  | 'messages'
  | 'messageDetail'
  | 'achievements'
  | 'profile'
  | 'uploadDocument';

type TabId = 'home' | 'turni' | 'ore' | 'messaggi' | 'profilo';
