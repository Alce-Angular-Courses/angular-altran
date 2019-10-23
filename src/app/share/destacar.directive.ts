import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[altDestacar]'
})
export class DestacarDirective implements OnInit {
  @Input() altDestacar: string;
  constructor(private element : ElementRef) {
  }

  ngOnInit() {
     console.log('Directiva aplicada: ', this.altDestacar);
     console.dir(this.element)
     this.element.nativeElement.innerHTML += ' {{IMP}}';
  }

  @HostListener('click') onClick() {
    this.element.nativeElement.classList.toggle('destacar')
  }
}
