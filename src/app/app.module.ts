import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Mainpage } from './components/mainpage/mainpage.component';
import { GitTrackerComponent } from './components/git-tracker/git-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    Mainpage,
    GitTrackerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
