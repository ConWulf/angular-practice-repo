import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private ref : ElementRef) { }
//not good practice
  ngOnInit() {
    this.ref.nativeElement.style.backgroundColor = 'midnightblue';
  }


}
