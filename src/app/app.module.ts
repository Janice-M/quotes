import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteVoteComponent } from './quote-vote/quote-vote.component';
import { TopDirective } from './top.directive';

@NgModule({
declarations: [
  AppComponent,
  QuoteFormComponent,
  QuotesComponent,
  QuoteVoteComponent,
  TopDirective
],
imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
