import { isDefined } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public clientIsBrowser: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (electron && electron?.remote) {
      this.clientIsBrowser = false;
    } else {
      this.clientIsBrowser = true;
    }
  }

  getCurrentWindow(): any {
    return electron.remote.getCurrentWindow();
  }

  closeWindow(): void {
    if (!this.clientIsBrowser) {
      let window = this.getCurrentWindow();
      window.close();
    }
  }

  minimizeWindow(): void {
    if (!this.clientIsBrowser) {
      let window = this.getCurrentWindow();
      window.minimize();
    }
  }

  maximizeWindow(): void {
    if (!this.clientIsBrowser) {
      let window = this.getCurrentWindow();
      window.isMaximized() ? window.unmaximize() : window.maximize();
    }
  }
}
