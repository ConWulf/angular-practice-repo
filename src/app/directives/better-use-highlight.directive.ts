import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterUseHighlight]'
})
export class BetterUseHighlightDirective implements OnInit {
  @Input() defaultColor : string = 'transparent';
  @Input('appBetterUseHighlight') hoverColor : string = 'midnightblue';
  @HostBinding('style.backgroundColor') backgroundColor : string | undefined;

  constructor(private el : ElementRef , private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'midnightblue')
  }

  @HostListener('mouseenter') mouseOver() {
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'midnightblue')
    this.backgroundColor = this.hoverColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'transparent')
    this.backgroundColor = this.defaultColor;
  }
}
