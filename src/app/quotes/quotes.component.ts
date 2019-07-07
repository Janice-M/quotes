import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote = [];
  addNewQuote(quote){
    quote.id = quote.Length+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
