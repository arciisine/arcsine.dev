import { Component, HostListener, HostBinding, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arcsine-pro';

  constructor(private target: ElementRef) {
    this.onScroll();

    setTimeout(() => {
      if (window.location.hash) {
        const anchor = window.location.hash.replace(/^#?/, '');
        const anchorEl = (document.getElementById(anchor) || document.getElementsByName(anchor)[0]) as HTMLElement;
        if (anchorEl) {
          anchorEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 250);
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    const mx = (window.innerHeight / 2);
    const pct = Math.trunc(Math.min(window.scrollY / mx, 1) * 10) * 10;
    (this.target.nativeElement as HTMLElement).setAttribute('delta', `${pct}`);
  }
}
