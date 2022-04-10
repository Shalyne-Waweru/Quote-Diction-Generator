import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  //Create a newQuote property and assign it to the Quote class 
  newQuote = new Quote(0,"","","",new Date(),0,0);

  //Create the 'addQuote' event emitter object which is of type 'Quote' that will emit an event to the parent component
  @Output() addQuote = new EventEmitter<Quote>();

  //Create the addNewQuote() function in which we use the emit method and pass in the new goal object we want to create.
  //We now need to make the parent component 'All-Quotes-Component' process this event
  addNewQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote(0,"","","",new Date(),0,0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
