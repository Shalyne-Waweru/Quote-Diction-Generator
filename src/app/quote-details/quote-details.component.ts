import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  //Defining details as the property that will undergo input property binding, which is of the type Quote
  @Input() details: Quote;

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
