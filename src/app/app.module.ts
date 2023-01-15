import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgImageSliderModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {

    const appElement = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define("lr-mixed-slider", appElement);
  }
  ngDoBootstrap() { }
}


