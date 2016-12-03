import { Directive, Input, EventEmitter, ElementRef, Renderer, Inject, OnInit } from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective implements OnInit {
  @Input('focus') focusEvent: EventEmitter<boolean>;
  constructor( @Inject(ElementRef) private element: ElementRef, private renderer: Renderer) { }
  ngOnInit() {
    this.focusEvent.subscribe(e => {
      //this.renderer.invokeElementMethod(this.element.nativeElement, "focus", []);
      // let el = this.element.nativeElement;
      // let length = el.value.length;
      // el.setSelectionRange(0, length);
      setTimeout(() => this.renderer.invokeElementMethod(this.element.nativeElement, "select", []), 100);
      //this.renderer.invokeElementMethod(this.element.nativeElement, "select", [])
    });
  }
}
