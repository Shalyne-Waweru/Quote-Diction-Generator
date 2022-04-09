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
    new Quote(1, 'Shalyne', 'Nothing is impossible. The word itself says I’m possible!','Audrey Hepburn',new Date(2020,3,14)),
    new Quote(2, 'Caroline', 'The bad news is time flies. The good news is you’re the pilot.','Michael Altshuler',new Date(2022,6,9)),
    new Quote(3, 'Nick', 'Success is not final, failure is not fatal: it is the courage to continue that counts.','Winston Churchill',new Date(2022,5,12)),
    new Quote(4, 'Tyler', 'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.','Ralph Waldo Emerson',new Date(2019,0,18)),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
