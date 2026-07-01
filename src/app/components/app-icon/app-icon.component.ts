import { Component, input } from '@angular/core';
import { Tone } from '../../happy-hour.data';

@Component({
  selector: 'app-icon',
  template: '<span class="glyph" [innerHTML]="glyphs()[name()]"></span>',
  styles: `
    :host {
      width: 38px;
      height: 38px;
      display: grid;
      place-items: center;
      border-radius: 14px;
      background: var(--icon-bg, var(--blue-soft));
      color: var(--icon-color, var(--blue));
      font-weight: 900;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.72);
    }

    .glyph {
      font-size: 18px;
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
    timer: '&#9201;',
    medal: '&#127941;',
    check: '&#10003;',
    star: '&#9733;',
    calendar: '&#128197;',
    megaphone: '&#128226;',
    profile: '&#128100;',
  });
}
