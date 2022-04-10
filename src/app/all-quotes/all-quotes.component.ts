import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-all-quotes',
  templateUrl: './all-quotes.component.html',
  styleUrls: ['./all-quotes.component.css']
})
export class AllQuotesComponent implements OnInit {

  //Create a variable "quotes" that will be an array of type Quote
  quotes:Quote[] = [
    new Quote(1, 'Shalyne', 'Nothing is impossible. The word itself says I’m possible!','Audrey Hepburn',new Date(2022,3,4),0,0),
    new Quote(2, 'Caroline', 'The bad news is time flies. The good news is you’re the pilot.','Michael Altshuler',new Date(2022,6,9),0,0),
    new Quote(3, 'Nick', 'Success is not final, failure is not fatal: it is the courage to continue that counts.','Winston Churchill',new Date(2021,5,12),0,0),
    new Quote(4, 'Tyler', 'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.','Ralph Waldo Emerson',new Date(2019,0,18),0,0),
    new Quote(5, 'Emma', 'We must let go of the life we have planned, so as to accept the one that is waiting for us.','Joseph Campbell',new Date(2022,0,18),0,0),
    new Quote(6, 'Michelle', 'Don’t try to lessen yourself for the world; let the world catch up to you.','Beyoncé',new Date(2021,5,18),0,0),
  ];

  //Toggle between hiding and showing the quote details on clicking the view more button
  showQuoteDetails(index:number){
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
  }

  quoteDelete(isDelete:boolean, index:number){
    if (isDelete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`);

      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }

  addedQuote(quote:any){
    let quotesArraySize = this.quotes.length;
    quote.id = quotesArraySize+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  preNum:number
  lastNum:number
  counter:number

  mostUpvotes(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

  constructor() { }

  ngOnInit(): void {
  }

}
