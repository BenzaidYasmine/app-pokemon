import { Directive, ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appBorderCard]',
})
export class BorderCardDirective {
  // ElementRef: ElementRef de notre element dans le DOM
  constructor(private el: ElementRef) {
    this.setHeight(328);
    this.setBorder('red');
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('#009688');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorderInit('#312E2E');
  }


  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    let border = `solid 4px` + color ;
    this.el.nativeElement.style.border = border ;
  }

  setBorderInit(color: string) {
    let border =  color ;
    this.el.nativeElement.style.border = border ;
  }
}
