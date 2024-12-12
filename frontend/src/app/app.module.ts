import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenteeRoutingModule } from './mentee/mentee-routing.module';
import { MenteeModule } from './mentee/mentee.module';
import { MentorModule } from './mentor/mentor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenteeModule,
    MentorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
