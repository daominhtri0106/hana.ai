import { Directive, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Directive({
  selector: '[appScrollContainerDirective]'
})
export class ScrollContainerDirective implements AfterViewInit {

  constructor(
    private elementRef: ElementRef<HTMLElement>,
  ) {
  }

  ngAfterViewInit(): void {
    const bottom = document.querySelector('.mat-paginator-container').getClientRects()[0].height;
    const header = document.querySelector('mat-toolbar').getClientRects()[0].height;
    const search = document.querySelector('.search-full-width').getClientRects()[0].height;
    const body = document.querySelector('body').getClientRects()[0].height;

    this.elementRef.nativeElement.style.height = body - (bottom + header + search) + 'px';

  }

}
