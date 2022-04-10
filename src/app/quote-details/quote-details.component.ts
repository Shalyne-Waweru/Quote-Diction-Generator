import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  //Defining details as the property that will undergo input property binding, which is of the type Quote
  @Input() details: Quote;

  //Defining isDelete as an EventEmitter that takes in a boolean.
  @Output() isDelete = new EventEmitter<boolean>();

  //This function calls the emit method on the isDelete EventEmitter. 
  //We now need to make the parent component 'All-Quotes-Component' process this event
  deleteQuote(complete:boolean){
    this.isDelete.emit(complete);
  }

  upvote(){
    this.details.upvotes+=1;
  }

  downvote(){
    this.details.downvotes+=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
