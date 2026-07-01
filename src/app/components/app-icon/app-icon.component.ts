import { Component, input } from '@angular/core';
import { Tone } from '../../happy-hour.data';

@Component({
  selector: 'app-icon',
  template: '<span class="glyph">{{ glyphs()[name()] }}</span>',
  styles: `
    :host {
      width: 34px;
      height: 34px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: var(--icon-bg, var(--blue-soft));
      color: var(--icon-color, var(--blue));
      font-weight: 900;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.7);
    }

    .glyph {
      font-size: 17px;
      line-height: 1;
    }

    :host(.lavender) {
      --icon-bg: var(--lavender-soft);
      --icon-color: var(--lavender);
    }

    :host(.mint) {
      --icon-bg: var(--mint-soft);
      --icon-color: var(--mint);
    }

    :host(.amber) {
      --icon-bg: var(--amber-soft);
      --icon-color: var(--amber);
    }
  `,
  host: {
    '[class]': 'tone()',
  },
})
export class AppIconComponent {
  readonly name = input.required<string>();
  readonly tone = input<Tone>('blue');
  readonly glyphs = input<Record<string, string>>({
    timer: '◷',
    medal: '◇',
    check: '✓',
    star: '★',
    calendar: '□',
    megaphone: '↗',
    profile: '○',
  });
}
