export class Quote {

  showQuoteDetails: boolean;
  constructor(public id:number, public firstName:string, public quote:string, public author:string, public postedDate:Date, public upvotes:number, downvotes:number){
    this.showQuoteDetails = false;
  }
}
