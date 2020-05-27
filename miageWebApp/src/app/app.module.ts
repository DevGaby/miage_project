import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProgrammeComponent } from './programme/programme.component';
import { CoursComponent } from './cours/cours.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProgrammeComponent,
    CoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
