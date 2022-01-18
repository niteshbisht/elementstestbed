import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PopupComponent } from './app.popup.component';

@NgModule({
  declarations: [
    // AppComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [
    PopupComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(PopupComponent, { injector: this.injector });
    customElements.define('my-popup', el);
  }
  ngDoBootstrap() {
  }
}
