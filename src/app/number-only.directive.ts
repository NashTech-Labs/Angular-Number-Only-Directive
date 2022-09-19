import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {

  constructor (private _elRef: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {

    this._renderer.setAttribute(
            this._elRef.nativeElement, 'onkeypress', 'return (event.charCode >=                   48 && event.charCode <= 57) || event.charCode == 0');

     }

}
