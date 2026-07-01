import { Component, ElementRef, viewChild } from '@angular/core';
import { AppIconComponent } from './components/app-icon/app-icon.component';

@Component({
  selector: 'app-root',
  imports: [AppIconComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly confettiLayer = viewChild<ElementRef<HTMLElement>>('confettiLayer');

  screen: ScreenId = 'login';
  toast = '';
  toastTone: 'default' | 'good' | 'warn' = 'default';
  showConfirmToast = false;
  messageFilter: MessageFilter = 'all';

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
    { n: '9', note: 'Info point', shift: 'blue' },
    { n: '10' },
    { n: '13' },
    { n: '14' },
    { n: '15' },
    { n: '16' },
    { n: '17' },
    { n: '18', note: 'Emporio', shift: 'coral', today: true },
    { n: '19' },
    { n: '20' },
    { n: '21' },
    { n: '22' },
    { n: '23' },
    { n: '24' },
    { n: '25' },
    { n: '26', note: 'Magazzino', shift: 'green' },
    { n: '27' },
    { n: '28' },
    { n: '29' },
    { n: '30' },
    { n: '31' },
    { n: '1', muted: true },
    { n: '2', muted: true },
  ];

  readonly upcomingShifts = [
    {
      day: '18',
      title: 'Emporio Solidale',
      meta: 'Sabato · 9:00–13:00 · Accoglienza',
      badge: 'Da confermare',
      badgeClass: 'coral',
    },
    {
      day: '26',
      title: 'Magazzino viveri',
      meta: 'Martedì · 15:00–19:00 · Accoglienza',
      badge: 'Scambio',
      badgeClass: 'green',
    },
    {
      day: '9',
      title: 'Info point evento',
      meta: 'Sabato · 10:00–12:00 · Orientamento',
      badge: 'Confermato',
      badgeClass: 'teal',
    },
  ];

  readonly hourShifts = [
    { day: '12', title: 'Emporio Solidale', meta: 'Aprile · Accoglienza', hours: '4h', badge: 'Validata', badgeClass: 'green' },
    { day: '19', title: 'Assistenza evento', meta: 'Aprile · Info point', hours: '4h', badge: 'Validata', badgeClass: 'green' },
    { day: '26', title: 'Magazzino viveri', meta: 'Maggio · Da svolgere', hours: '4h', badge: 'Prevista', badgeClass: 'grey' },
  ];

  readonly volunteers = [
    { avatar: '🙂', name: 'Marco L.', meta: 'Accoglienza · disponibile domenica' },
    { avatar: '😊', name: 'Giulia P.', meta: 'Accoglienza · zona Milano Est' },
    { avatar: '🙂', name: 'Paolo C.', meta: 'Accoglienza · nessun conflitto' },
  ];

  readonly badges = [
    { emoji: '🤝', title: 'Dentro la squadra', subtitle: 'Primo passo' },
    { emoji: '⏱', title: 'Cuore in azione', subtitle: 'Prime 10 ore' },
    { emoji: '🌟', title: 'Una certezza', subtitle: 'Turni confermati' },
    { emoji: '💬', title: 'Sul pezzo', subtitle: 'Messaggi letti' },
    { emoji: '📦', title: 'Missione magazzino', subtitle: 'Dietro le quinte' },
    { emoji: '☕', title: 'Energia Happy', subtitle: 'Hero in progress' },
  ];

  readonly tabs: { id: TabId; icon: string; label: string; target: ScreenId }[] = [
    { id: 'home', icon: 'home', label: 'Home', target: 'home' },
    { id: 'turni', icon: 'calendar', label: 'Turni', target: 'calendar' },
    { id: 'ore', icon: 'timer', label: 'Ore', target: 'hours' },
    { id: 'messaggi', icon: 'messages', label: 'Messaggi', target: 'messages' },
    { id: 'profilo', icon: 'profile', label: 'Profilo', target: 'profile' },
  ];

  readonly availabilityDays = [
    { label: 'L', on: false, coral: false },
    { label: 'M', on: true, coral: false },
    { label: 'M', on: false, coral: false },
    { label: 'G', on: true, coral: false },
    { label: 'V', on: false, coral: false },
    { label: 'S', on: false, coral: true },
    { label: 'D', on: false, coral: false },
  ];

  go(screen: ScreenId): void {
    this.screen = screen;
    this.toast = '';
    this.showConfirmToast = false;
    requestAnimationFrame(() => document.querySelector('.app-scroll')?.scrollTo({ top: 0 }));
  }

  back(): void {
    const prev: Partial<Record<ScreenId, ScreenId>> = {
      calendar: 'home',
      shiftDetail: 'calendar',
      confirmPresence: 'shiftDetail',
      absence: 'shiftDetail',
      swapStart: 'shiftDetail',
      eligibleVolunteers: 'swapStart',
      swapStatus: 'home',
      hours: 'home',
      messages: 'home',
      messageDetail: 'messages',
      achievements: 'hours',
      profile: 'home',
      uploadDocument: 'profile',
    };
    this.go(prev[this.screen] ?? 'home');
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

  showToast(message: string, tone: 'default' | 'good' | 'warn' = 'default'): void {
    this.toast = message;
    this.toastTone = tone;
  }

  confirmPresence(): void {
    this.showConfirmToast = true;
    this.launchConfetti();
    setTimeout(() => this.go('home'), 1800);
  }

  launchConfetti(): void {
    const layer = this.confettiLayer()?.nativeElement;
    if (!layer) return;
    layer.innerHTML = '';
    const colors = ['#E53935', '#FF6B6B', '#F9C1C1', '#6EC6E8', '#A8E1F2', '#FFF4E8'];
    for (let i = 0; i < 54; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.background = colors[i % colors.length];
      piece.style.animationDelay = `${Math.random() * 0.32}s`;
      piece.style.animationDuration = `${1.15 + Math.random() * 0.7}s`;
      layer.appendChild(piece);
    }
    setTimeout(() => {
      layer.innerHTML = '';
    }, 2100);
  }

  downloadCertificate(): void {
    const text = [
      'Fondazione Aurora',
      '',
      'Attestato di partecipazione',
      '',
      'Si attesta che Francesca Rossi ha svolto 36 ore di volontariato nel 2026, partecipando a 9 turni presso le attività della Fondazione Aurora.',
      '',
      'Documento generato da Happy Hour per Fondazione Aurora.',
    ].join('\n');
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'Attestato_partecipazione_Francesca_Rossi_2026.txt';
    anchor.click();
    URL.revokeObjectURL(url);
    this.showToast('Attestato generato e scaricato.', 'good');
  }

  screenTitle(): string {
    const titles: Record<ScreenId, string> = {
      login: 'Benvenuta',
      home: 'Happy Hour',
      calendar: 'Calendario turni',
      shiftDetail: 'Dettaglio turno',
      confirmPresence: 'Conferma presenza',
      absence: 'Segnala problema',
      swapStart: 'Scambio turno',
      eligibleVolunteers: 'Volontari compatibili',
      swapStatus: 'Stato scambio',
      hours: 'Le tue ore',
      messages: 'Messaggi',
      messageDetail: 'Messaggio urgente',
      achievements: 'Traguardi',
      profile: 'Profilo',
      uploadDocument: 'Carica documento',
    };
    return titles[this.screen];
  }

  needsBack(): boolean {
    return this.screen !== 'login' && this.screen !== 'home';
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
type MessageFilter = 'all' | 'urgent' | 'info' | 'thanks';
