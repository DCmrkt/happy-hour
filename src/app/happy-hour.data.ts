export type Tone = 'blue' | 'lavender' | 'mint' | 'amber';

export interface Stat {
  label: string;
  value: string;
  tone: Tone;
  icon: string;
}

export interface Shift {
  day: string;
  title: string;
  area: string;
  hours: string;
  status: 'Validata' | 'Prevista';
}

export interface CalendarDay {
  label: string;
  state?: 'selected' | 'soft' | 'confirmed';
  note?: string;
}

export const stats: Stat[] = [
  { icon: 'timer', value: '36h', label: "donate quest'anno", tone: 'blue' },
  { icon: 'medal', value: '6', label: 'badge conquistati', tone: 'lavender' },
  { icon: 'check', value: '8', label: 'turni completati', tone: 'mint' },
  { icon: 'star', value: '120', label: 'punti guadagnati', tone: 'amber' },
];

export const shifts: Shift[] = [
  { day: '12', title: 'Emporio Solidale', area: 'Aprile - Accoglienza', hours: '4h', status: 'Validata' },
  { day: '19', title: 'Assistenza evento', area: 'Aprile - Info point', hours: '4h', status: 'Validata' },
  { day: '26', title: 'Magazzino viveri', area: 'Maggio - Da svolgere', hours: '4h', status: 'Prevista' },
];

export const calendarDays: CalendarDay[] = [
  '27', '28', '29', '30', '1', '2', '3',
  '4', '5', '6', '7', '8', '9', '10',
  '11', '12', '13', '14', '15', '16', '17',
  '18', '19', '20', '21', '22', '23', '24',
  '25', '26', '27', '28', '29', '30', '31',
].map((label) => ({ label }));

calendarDays[15] = { label: '9', state: 'soft', note: 'Info point' };
calendarDays[21] = { label: '18', state: 'selected', note: 'Empori' };
calendarDays[29] = { label: '26', state: 'confirmed', note: 'Magazz.' };
