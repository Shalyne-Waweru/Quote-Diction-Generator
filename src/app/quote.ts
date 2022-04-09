export class Quote {

  showQuoteDetails: boolean;
  constructor(public id:number, public firstName:string, public quote:string, public author:string, public postedDate:Date){
    this.showQuoteDetails = false;
  }
}
