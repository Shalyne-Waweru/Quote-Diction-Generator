import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.color ='#e60292';
    // this.elem.nativeElement.style.boxShadow ='10px 10px 5px #abd8eb';
  }

}
