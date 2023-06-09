import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StyleColor } from './directives/style-color.directive';
import { HelloComponent } from './hello/hello.component';

import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HomeComponent,
    StyleColor,
    HomeComponent,
    HelloComponent,
    HighlightDirective,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
