import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  //The variable value will be our date object from the quotes.
  transform(value: any): number {
    //Get current date and time
   let today:Date = new Date();

   //Create a new date object for today's date without the time aspect
   let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());

   //Calculate the difference of the date we get in the pipe input and subtracted the current date to get the difference in milliseconds.
   let dateDifference = Math.abs(todayWithNoTime - value);

   //Get the number of seconds in a day
   const secondsInADay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day

    //Convert difference of the dates from miliseconds to seconds
   let dateDifferenceSeconds = dateDifference*0.001;

   //Divide the seconds by the seconds in a day to get how many days are left.
   let dateCounter = dateDifferenceSeconds/secondsInADay;

   if (dateCounter >= 1 && todayWithNoTime > value){
     return dateCounter;
   }else{
     return 0;
   }
 }

}
