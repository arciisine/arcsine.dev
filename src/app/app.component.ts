import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arcsine-pro';

  constructor() {
    setTimeout(() => {
      if (window.location.hash) {
        const anchor = window.location.hash.replace(/^#?/, '');
        const target = (document.getElementById(anchor) || document.getElementsByName(anchor)[0]) as HTMLElement;
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 250);
  }
}
