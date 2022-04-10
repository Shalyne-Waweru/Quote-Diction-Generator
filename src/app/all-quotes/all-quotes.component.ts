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
    new Quote(1, 'Shalyne', 'Nothing is impossible. The word itself says I’m possible!','Audrey Hepburn',new Date(2020,3,14),0,0),
    new Quote(2, 'Caroline', 'The bad news is time flies. The good news is you’re the pilot.','Michael Altshuler',new Date(2022,6,9),0,0),
    new Quote(3, 'Nick', 'Success is not final, failure is not fatal: it is the courage to continue that counts.','Winston Churchill',new Date(2022,5,12),0,0),
    new Quote(4, 'Tyler', 'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.','Ralph Waldo Emerson',new Date(2019,0,18),0,0),
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

  constructor() { }

  ngOnInit(): void {
  }

}
