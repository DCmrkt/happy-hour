import { Component, input } from '@angular/core';
import { Tone } from '../../happy-hour.data';

@Component({
  selector: 'app-icon',
  template: `
    @switch (name()) {
      @case ('home') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z" />
        </svg>
      }
      @case ('calendar') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M8 2v4M16 2v4M3 10h18" />
        </svg>
      }
      @case ('timer') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      }
      @case ('messages') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M4 5h16v11H7l-3 3V5Z" />
        </svg>
      }
      @case ('profile') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 22c1.4-4 4-6 8-6s6.6 2 8 6" />
        </svg>
      }
      @case ('medal') {
        <span class="glyph" aria-hidden="true">&#127941;</span>
      }
      @case ('megaphone') {
        <span class="glyph" aria-hidden="true">&#128226;</span>
      }
      @case ('check') {
        <span class="glyph" aria-hidden="true">&#10003;</span>
      }
      @case ('star') {
        <span class="glyph" aria-hidden="true">&#9733;</span>
      }
    }
  `,
  styles: `
    :host {
      width: 38px;
      height: 38px;
      display: grid;
      place-items: center;
      border-radius: 14px;
      background: var(--icon-bg, var(--blue-soft));
      color: var(--icon-color, var(--blue));
      flex: 0 0 auto;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.72);
    }

    :host(.nav) {
      width: 28px;
      height: 28px;
      border-radius: 10px;
      background: var(--cream);
      color: var(--muted);
      box-shadow: none;
    }

    :host(.nav.blue) {
      background: var(--cream);
      color: #9a4f16;
    }

    svg {
      width: 21px;
      height: 21px;
      display: block;
    }

    :host(.nav) svg {
      width: 18px;
      height: 18px;
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
    '[class.blue]': 'tone() === "blue"',
    '[class.lavender]': 'tone() === "lavender"',
    '[class.mint]': 'tone() === "mint"',
    '[class.amber]': 'tone() === "amber"',
    '[class.nav]': 'variant() === "nav"',
  },
})
export class AppIconComponent {
  readonly name = input.required<string>();
  readonly tone = input<Tone>('blue');
  readonly variant = input<'default' | 'nav'>('default');
}
