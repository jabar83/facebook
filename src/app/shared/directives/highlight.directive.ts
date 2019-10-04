import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import debug from 'debug';


const console = {
    log: debug('facebook:highlight:log'),
    error: debug('facebook:highlight:error'),
    warn: debug('facebook:highlight:warm')
}

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseover') mouseoverhandler() {
    console.log('mouseover');
    const $element = this.element.nativeElement;
    this.renderer.addClass($element, 'border');
    this.renderer.addClass($element, 'border-primary');
  }
  @HostListener('mouseleave') mouseleavehandler() {
    console.log('mouseleave');
    const $element = this.element.nativeElement;
    this.renderer.removeClass($element, 'border');
    this.renderer.removeClass($element, 'border-primary');
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2) {

   }

}
