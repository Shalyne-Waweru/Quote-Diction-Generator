import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  //Create a newQuote property and assign it to the Quote class 
  newQuote = new Quote(0,"","","",new Date(),0,0)

  constructor() { }

  ngOnInit(): void {
  }

}
