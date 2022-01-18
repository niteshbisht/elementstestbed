import { LazyElementModuleOptions, LazyElementsModule } from '@angular-extensions/elements';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'my-popup',
      url: 'http://localhost:3000/popup.js',
      // loadingComponent: SpinnerComponent,
      // errorComponent: ErrorComponent,
      preload: true
    }
  ]
};


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyElementsModule.forFeature(options)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
