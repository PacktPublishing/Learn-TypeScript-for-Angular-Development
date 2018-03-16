import { Directive } from '@angular/core';
import { Input, ElementRef } from "@angular/core";

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {
  @Input('appFontSize') fontSize: string;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.fontSize = this.fontSize;
  }
}
